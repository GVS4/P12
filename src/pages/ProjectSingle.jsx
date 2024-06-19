import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';

const ProjectSingle = () => {
  const { id } = useParams();
  const projects = useSelector(state => state.projects.projects);
  const [singleProject, setSingleProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find(project => project.id === parseInt(id));
      setSingleProject(foundProject);
      
      const otherProjects = projects.filter(project => project.id !== parseInt(id));
      const shuffledProjects = otherProjects.sort(() => 0.5 - Math.random());
      setRelatedProjects(shuffledProjects.slice(0, 4));

      setLoading(false);
    }
  }, [projects, id]);

  if (loading) return <div>Loading...</div>;

  const images = [singleProject.img1, singleProject.img2, singleProject.img3].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader project={singleProject} />
      <ProjectGallery images={images} />
      <ProjectInfo project={singleProject} />
      <ProjectRelatedProjects projects={relatedProjects} />
    </motion.div>
  );
};

export default ProjectSingle;
