// src/actions/projectsActions.js

import projectsJson from "../data/projectsJson.json";

const GITHUB_TOKEN = typeof process !== 'undefined' ? process.env.REACT_APP_GITHUB_TOKEN : '';

export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_PROJECTS_ERROR = 'SET_PROJECTS_ERROR';
export const SET_SEARCH_PROJECT = "SET_SEARCH_PROJECT";
export const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const setProjectsError = (error) => ({
  type: SET_PROJECTS_ERROR,
  payload: error,
});

export const setSearchProject = (searchTerm) => ({
  type: SET_SEARCH_PROJECT,
  payload: searchTerm,
});

export const setSingleProject = (project) => ({
  type: SET_SINGLE_PROJECT,
  payload: project,
});

const logRateLimitInfo = (headers) => {
  if (!GITHUB_TOKEN) {
    const rateLimit = headers.get('X-RateLimit-Limit');
    const rateLimitRemaining = headers.get('X-RateLimit-Remaining');
    const rateLimitReset = headers.get('X-RateLimit-Reset');

    if (rateLimit && rateLimitRemaining && rateLimitReset) {
      console.log(`Rate Limit: ${rateLimit}, Remaining: ${rateLimitRemaining}, Resets at: ${new Date(rateLimitReset * 1000).toLocaleTimeString()}`);
    } else {
      console.log("Using GitHub token: No | Rate Limit: null, Remaining: null, Resets at: N/A");
    }
  }
};

const fetchRepositories = async () => {
  const headers = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch('https://api.github.com/users/GVS4/repos', { headers });
  logRateLimitInfo(response.headers);

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }

  return await response.json();
};

const fetchLanguages = async (project) => {
  const headers = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(project.languages_url, { headers });
  logRateLimitInfo(response.headers);

  if (!response.ok) {
    throw new Error(`Failed to fetch languages for ${project.repoName}: ${response.statusText}`);
  }

  const languages = await response.json();
  return { ...project, languages };
};

const assembleProjects = (reposGithub) => {
  return projectsJson.map((project) => {
    const repo = reposGithub.find((r) => r.name === project.repo.split('/')[1]);
    if (!repo) return null;

    return {
      ...project,
      title: `${repo.name} - ${project.name}`,
      repoName: repo.name,
      projectName: project.name,
      languages_url: repo.languages_url,
      lastUpdate: repo.updated_at,
      htmlUrl: repo.html_url,
      demoUrl: `https://GVS4.github.io/${repo.name}/`,
      previewImage: project.img
    };
  }).filter(Boolean);
};

export const createAndStoreProjects = () => async (dispatch) => {
  try {
    const reposGithub = await fetchRepositories();
    const projects = assembleProjects(reposGithub);
    const projectsWithLanguages = await Promise.all(projects.map(fetchLanguages));
    dispatch(setProjects(projectsWithLanguages));
  } catch (err) {
    console.error(err);
    dispatch(setProjectsError(err.message));
  }
};
