import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';

const iconMapper = {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  // Add other icons here as needed
};

export const getIconByName = (name) => {
  return iconMapper[name] || null;
};
