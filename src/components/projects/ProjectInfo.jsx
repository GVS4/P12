// ProjectInfo.jsx

import React from 'react';
import { getIconByName } from '../utils/iconMapper';

const ProjectInfo = ({ info }) => {
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {info.ClientHeading}
          </p>
          <ul className="leading-loose">
            {info.CompanyInfo.map((item) => (
              <li className="font-general-regular text-ternary-dark dark:text-ternary-light" key={item.id}>
                <span>{item.title}: </span>
                <a
                  href={item.details}
                  className={item.title === 'Website' || item.title === 'Phone' ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300' : ''}
                  aria-label="Project Website and Phone"
                >
                  {item.details}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {info.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {info.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {info.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {info.Technologies[0].techs.join(', ')}
          </p>
        </div>

        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {info.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {info.SocialSharing.map((social) => {
              const Icon = getIconByName(social.icon);
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="__blank"
                  aria-label="Share Project"
                  className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl"><Icon /></span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {info.ProjectDetailsHeading}
        </p>
        {info.ProjectDetails.map((details) => (
          <p key={details.id} className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {details.details}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo;
