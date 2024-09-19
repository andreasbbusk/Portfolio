import { motion } from "framer-motion";
import styles from "./HomePageStyles.module.css";

const Hero = () => {
  return (
    <>
      <motion.section className="container">
        <div>
          <div className={styles.hero_header}>
            <h1 className="hero_title indent">Turning ideas into</h1>
            <h1 className="hero_title bd_header">Creative solutions</h1>
          </div>
          <div className={styles.hero_subheader}>
            <p>
              As a passionate and driven designer & developer, I'm always eager
              to learn and grow. I thrive on creating unique, engaging
              experiences with innovative ideas and user-centric solutions that
              aim to make a lasting impact.
            </p>
            <h4 className={styles.hero_port}>Portfolio 2024 ©</h4>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
