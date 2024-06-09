import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

// Créez un contexte pour les projets
export const ProjectsContext = createContext();

// Créez le fournisseur de contexte pour les projets
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');

	// Recherche de projets par titre
	const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
