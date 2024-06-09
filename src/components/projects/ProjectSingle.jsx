// src/components/projects/ProjectSingle.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';
import ProjectGallery from './ProjectGallery';
import ProjectInfo from './ProjectInfo';
import ProjectRelatedProjects from './ProjectRelatedProjects';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
  const { id } = useParams();
  const projects = useSelector(state => state.projects.projects);
  const singleProject = projects.find(project => project.id === parseInt(id));

  if (!singleProject) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader project={singleProject} />
      <ProjectGallery images={singleProject.ProjectImages} />
      <ProjectInfo info={singleProject.ProjectInfo} />
      <ProjectRelatedProjects relatedProjects={singleProject.RelatedProject.Projects} />
    </motion.div>
  );
};

export default ProjectSingle;
