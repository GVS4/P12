import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import ProjectSingleGrid from './ProjectSingleGrid.jsx';
import { setSearchProject } from '../../actions/projectsActions';

const ProjectsGrid = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const searchProject = useSelector((state) => state.projects.searchProject);

  const searchProjectsByTitle = projects
    .filter((item) => {
      return item.title.toLowerCase().includes(searchProject.toLowerCase());
    })
    .slice(0, 6); // Limiter à 6 projets

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Portfolio de projets
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <div
          className="
            flex
            justify-between
            border-b border-primary-light
            dark:border-secondary-dark
            pb-3
            gap-3
            "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                hidden
                sm:block
                bg-primary-light
                dark:bg-ternary-dark
                p-2.5
                shadow-sm
                rounded-xl
                cursor-pointer
                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                dispatch(setSearchProject(e.target.value));
              }}
              className="font-general-medium 
                pl-3
                pr-1
                sm:px-4
                py-2
                border 
                border-gray-200
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Rechercher des projets"
              aria-label="Nom"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {searchProjectsByTitle.map((project) => (
          <ProjectSingleGrid
            id={project.id}
            title={project.title}
            image={project.img1}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
