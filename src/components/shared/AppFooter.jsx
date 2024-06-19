import { FiGithub } from 'react-icons/fi';

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/gvs4',
    label: 'GitHub',
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <li key={link.id} className="flex-shrink-0">
                <a
                  href={link.url}
                  target="__blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300 w-16 h-16 flex items-center justify-center"
                  aria-label={link.label}
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">
                    {link.icon}
                  </i>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AppFooter;
