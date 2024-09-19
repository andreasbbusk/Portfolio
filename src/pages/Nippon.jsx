import React, { useEffect } from "react";
import ProjectTitle from "../components/ProjectComponents/ProjectTitle";
import ProjectDescription from "../components/ProjectComponents/ProjectDescription";
import styles from "../components/ProjectComponents/ProjectComponentsStyles.module.css";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import NipponFront from "../assets/nippon-front.png";
import Nippon1 from "../assets/nippon1.png";
import Nippon2 from "../assets/nippon2.png";
import NipponVid from "../assets/nippon-vid.mp4";
import Footer from "../components/Footer/Footer";

const NipponProject = ({ setTheme }) => {
  useEffect(() => {
    setTheme("nippon"); // Set 'magicplanet' theme when this page is loaded
  }, [setTheme]);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <main id="nippon" className="project-container page">
        <ProjectTitle title="Nippon" />
        <div>
          <img src={NipponFront} alt="" />
        </div>
        <ProjectDescription 
        collab="Group Project"
        pd="How can Nippon, a Japanese-inspired meal kit company, develop a digital platform and meal kit concept that supports parents' need for convenience while promoting fun, interactive cooking experiences with their children?"
        solution="Designed a vibrant and engaging website that appeals to both children and adults, making the cooking process fun, interactive, and accessible for all ages. Created an intuitive recipe section, simplifying the cooking process for both parents and kids. Implemented engaging features that balance convenience with educational and playful cooking activities."
        pdDays="10 days"
        type="Brand design & development"
        tag1="HTML"
        tag2="CSS"
        tag3="JavaScript"
        tag4="Figma"
        src="https://github.com/andreasbbusk/Nippon.git"
        livesite="https://nippon.andreasbusk.dk/"
        />
        <section className={styles.image_grid}>
          <div>
            <img src={Nippon1} alt="Project image" />
          </div>
          <div>
            <img src={Nippon2} alt="Project image" />
          </div>
          <div className={styles.content_vids}>
            <video autoPlay muted loop src={NipponVid}></video>
          </div>
        </section>
        <section className={styles.project_navigation}>
          <div className={styles.navigation_header}>
            <h4>Other Projects</h4>
            <div className={styles.project_line}></div>
          </div>
          <div className={styles.navigation_links}>
            <NavHashLink to={"/japanphoto/#japanphoto"}>
              <motion.div
                transition={spring}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                JapanPhoto
              </motion.div>
            </NavHashLink>
            <NavHashLink to={"/magicplanet/#magicplanet"}>
              <motion.div
                transition={spring}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                The Magic Planet
              </motion.div>
            </NavHashLink>
            <NavHashLink to={"/hof/#hof"}>
              <motion.div
                transition={spring}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Holm Outdoor Fitness
              </motion.div>
            </NavHashLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NipponProject;
