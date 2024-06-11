import profileImage from '../../images/gvsProfile.jpg';
import { useSelector } from 'react-redux';

const AboutMeBio = () => {
  const aboutMe = useSelector((state) => state.about.aboutMe);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="Profile" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
            style={{ marginBottom: '250px' }}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
