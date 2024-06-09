import projectsJson from '../data/projectsJson.json';

const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;

export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_PROJECTS_ERROR = 'SET_PROJECTS_ERROR';

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const setProjectsError = (error) => ({
  type: SET_PROJECTS_ERROR,
  payload: error,
});

// Fonction pour afficher les informations de limite de taux de l'API GitHub
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

// Fonction asynchrone pour récupérer les dépôts depuis l'API GitHub
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

// Fonction asynchrone pour récupérer les langages utilisés dans chaque projet
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

// Fonction pour assembler les données des projets avec les dépôts récupérés
const assembleProjects = (reposGithub) => {
  return projectsJson.map((project) => {
    const repo = reposGithub.find((r) => r.name === project.repo.split('/')[1]);
    if (!repo) return null;

    return {
      repoName: repo.name,
      projectName: project.name,
      competences: project.competences.join(' | '),
      languages_url: repo.languages_url,
      lastUpdate: repo.updated_at,
      htmlUrl: repo.html_url,
      demoUrl: `https://GVS4.github.io/${repo.name}/`,
      previewImage: project.previewImage
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
