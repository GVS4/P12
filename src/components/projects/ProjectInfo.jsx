import React from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import LanguageBar from "./LanguageBar";

const ProjectInfo = ({ project }) => {
  // Collecter toutes les compétences dans un tableau en utilisant filter et map
  const competences = Object.keys(project)
    .filter((key) => key.startsWith("competence") && project[key])
    .map((key) => project[key]);

  return (
    <div className="block sm:flex gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project information */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Information
          </p>
          <div className="font-general-regular text-primary-dark dark:text-ternary-light flex items-center">
            <FiGlobe className="mr-2" />
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {project.demoUrl}
            </a>
          </div>
          <br />
          <div className="font-general-regular text-primary-dark dark:text-ternary-light flex items-center">
            <FiGithub className="mr-2" />
            <a
              href={project.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {project.htmlUrl}
            </a>
          </div>
          <br />
          <br />
          <div className="font-general-regular text-primary-dark dark:text-ternary-light flex items-center">
            <LanguageBar languages={project.languages} />
          </div>
        </div>
      </div>

      {/* Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Description
        </p>
        <p className="font-general-regular mb-5 text-ternary-dark dark:text-ternary-light">
        {project.description}
        </p>
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Objectives
        </p>
        <ul
          className="list-disc pl-5"
          style={{ paddingLeft: "20px", listStyleType: "disc" }}
        >
          {competences.map((competence, index) => (
            <li
              key={index}
              className="font-general-regular text-primary-dark dark:text-ternary-light"
              style={{ paddingBottom: "5px" }}
            >
              {competence}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfo;
