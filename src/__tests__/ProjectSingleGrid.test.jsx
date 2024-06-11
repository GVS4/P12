import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectSingleGrid from '../components/projects/ProjectSingleGrid';
import '@testing-library/jest-dom/extend-expect';

describe('ProjectSingleGrid', () => {
  const project = {
    id: 1,
    title: 'Sample Project',
    image: 'sample-image.jpg',
  };

  test('renders without crashing', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ProjectSingleGrid id={project.id} title={project.title} image={project.image} />
      </Router>
    );

    expect(getByText('Sample Project')).toBeInTheDocument();
    expect(getByAltText('Single Project')).toBeInTheDocument();
  });

  test('displays the correct project title and image', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ProjectSingleGrid id={project.id} title={project.title} image={project.image} />
      </Router>
    );

    const titleElement = getByText('Sample Project');
    const imageElement = getByAltText('Single Project');

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'sample-image.jpg');
  });

  test('link navigates to the correct project page', () => {
    const { getByRole } = render(
      <Router>
        <ProjectSingleGrid id={project.id} title={project.title} image={project.image} />
      </Router>
    );

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/projects/single-project/1');
  });
});
