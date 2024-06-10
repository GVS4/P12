import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';


const ProjectSingle = () => {
  const { id } = useParams();
  const projects = useSelector(state => state.projects.projects);
  const [singleProject, setSingleProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find(project => project.id === parseInt(id));
      setSingleProject(foundProject);
      setLoading(false);
    }
  }, [projects, id]);

  useEffect(() => {
    console.log('ID:', id);
    console.log('Projects:', projects);
    console.log('Single Project:', singleProject);
  }, [projects, id, singleProject]);

  if (loading) return <div>Loading...</div>;

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, delay: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
    className="container mx-auto mt-5 sm:mt-10"
  >
    <div> {singleProject.title}</div>
    </motion.div>

  );
};

export default ProjectSingle;
