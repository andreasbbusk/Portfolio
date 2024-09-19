import { NavLink } from "react-router-dom";
import styles from "./ProjectCardStyles.module.css";
import { motion } from "framer-motion";

const ProjectCard = ({ number, title, link, tag, theme }) => {
  const handleThemeChange = () => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <>
      <NavLink
        reloadDocument
        to={link}
        onClick={handleThemeChange}
        aria-current="page"
        target="_self"
      >
        <motion.div
          className={styles.card_container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 0.9, opacity: 0.6}}
          transition={{ type: "tween", stiffness: 300, duration: 0.2 }}
        >
          <div className={styles.project_card}>
            <h6>{number}</h6>
            <h2>{title}</h2>
          </div>
          <div className={styles.project_card}>
            <h5>{tag}</h5>
          </div>
        </motion.div>
      </NavLink>
    </>
  );
};

export default ProjectCard;
