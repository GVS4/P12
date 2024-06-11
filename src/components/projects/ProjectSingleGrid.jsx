import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingleGrid = ({ id, title, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="w-full max-w-xs" // Add Tailwind classes for width
    >
      <Link to={`/projects/single-project/${id}`} aria-label="Single Project">
        <div
          className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          style={{ width: "100%", height: "350px" }}
        >
          <div style={{ height: "70%" }}>
            <img
              src={image}
              className="rounded-t-xl border-none w-full h-full object-cover"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6" style={{ height: "30%" }}>
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingleGrid;
