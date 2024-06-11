import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import AboutMeBio from '../components/about/AboutMeBio';

// Mocking useSelector
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('AboutMeBio', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        about: {
          aboutMe: [
            {
              id: 1,
              bio: "Hi, I'm Tanguy Even, also known as GVS. I am currently a student at OpenClassrooms, pursuing a degree in Web Integration.",
            },
          ],
        },
      })
    );
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders profile image and bio text correctly', () => {
    const { getByAltText, getByText } = render(<AboutMeBio />);

    // Check if profile image is rendered
    const profileImage = getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();

    // Check if bio texts are rendered
    const bioText1 = getByText(
      "Hi, I'm Tanguy Even, also known as GVS. I am currently a student at OpenClassrooms, pursuing a degree in Web Integration."
    );
    expect(bioText1).toBeInTheDocument();
  });
});
