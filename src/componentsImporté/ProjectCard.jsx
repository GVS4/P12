import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../utils/isEmpty';
import LanguageBar from './LanguageBar';
import OctocatSVG from '../svgs/Octocat';
import LiveDemoSVG from '../svgs/LiveDemo';

const ProjectCard = ({ repoName, projectName, competences, languages, htmlUrl, demoUrl, previewImage }) => {
  if (isEmpty(languages)) {
    return null;
  }

  return (
    <div className="project-card" style={{ backgroundImage: `url(${previewImage})` }}>
      <div className="overlay">
        <div className="title-bar-container">
          <h3>{repoName} - {projectName}</h3>
          <LanguageBar languages={languages} />
        </div>
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="octocat-link">
          <OctocatSVG />
        </a>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="live-demo-link">
          <LiveDemoSVG />
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  repoName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  competences: PropTypes.string.isRequired,
  languages: PropTypes.object.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default ProjectCard;
