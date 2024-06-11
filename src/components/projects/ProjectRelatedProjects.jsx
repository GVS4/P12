import React from 'react';
import { Link } from 'react-router-dom';

const ProjectRelatedProjects = ({ projects }) => {
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Related Projects
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-10">
        {projects.map((project) => (
          <Link to={`/projects/single-project/${project.id}`} key={project.id} className="block w-full h-48 sm:h-48">
            <img
              src={project.img1}
              className="rounded-xl cursor-pointer w-full h-full object-cover"
              alt={project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
