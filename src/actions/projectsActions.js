import projectsData from "../data/projectsData";

const GITHUB_TOKEN = typeof process !== 'undefined' ? process.env.REACT_APP_GITHUB_TOKEN : '';

export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_PROJECTS_ERROR = 'SET_PROJECTS_ERROR';
export const SET_SEARCH_PROJECT = "SET_SEARCH_PROJECT";

// URLs
const GITHUB_REPOS_URL = 'https://api.github.com/users/GVS4/repos';

// Action to set projects in the state
export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

// Action to set error message in the state
export const setProjectsError = (error) => ({
  type: SET_PROJECTS_ERROR,
  payload: error,
});

// Action to set search term for filtering projects
export const setSearchProject = (searchTerm) => ({
  type: SET_SEARCH_PROJECT,
  payload: searchTerm,
});

// Fetch repositories from GitHub
const fetchRepositories = async () => {
  const headers = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(GITHUB_REPOS_URL, { headers });

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }

  return await response.json();
};

// Fetch languages used in a project from GitHub
const fetchLanguages = async (project) => {
  const headers = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(project.languages_url, { headers });

  if (!response.ok) {
    throw new Error(`Failed to fetch languages for ${project.repoName}: ${response.statusText}`);
  }

  const languages = await response.json();
  return { ...project, languages };
};

// Assemble projects data with additional information from GitHub
const assembleProjects = (reposGithub) => {
  return projectsData.map((project) => {
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
    };
  }).filter(Boolean);
};

// Create and store projects with GitHub data and dispatch to the state
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
