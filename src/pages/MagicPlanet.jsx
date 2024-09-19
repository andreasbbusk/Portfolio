import ProjectDescription from "../components/ProjectComponents/ProjectDescription";
import ProjectTitle from "../components/ProjectComponents/ProjectTitle";
import styles from "../components/ProjectComponents/ProjectComponentsStyles.module.css";
import { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Video from "../assets/planetearth.mp4";
import Space1 from "../assets/spacejourney.mp4"
import Space2 from "../assets/magicplanet1.png"
import Exhibition from "../assets/Jorden-udstilling.png"
import Footer from "../components/Footer/Footer";

const TheMagicPlanet = ({ setTheme }) => {
  useEffect(() => {
    setTheme("magicplanet"); // Set 'magicplanet' theme when this page is loaded
  }, [setTheme]);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <main id="magicplanet" className="project-container page">
        <ProjectTitle title="The Magic" secondtitle="Planet" />
        <div>
          <video autoPlay muted loop src={Video}></video>
        </div>
        <ProjectDescription
          collab="Group Project"
          pdDays="16 days"
          type="Interactive storytelling"
          pd="How can we rebrand the “Magic Planet” exhibit at the Steno Museum to make it more interactive and engaging, using storytelling to create a vivid journey through the solar system?"
          tag1="HTML"
          tag2="CSS"
          tag3="JavaScript"
          tag4="Spline"
          solution="We developed a captivating narrative that guides visitors through the solar system, transforming the exhibit into an engaging and educational adventure.
          Incorporated hands-on, interactive features that allow visitors to explore and experience the planets in a dynamic and participatory way.
          Rebranded the exhibit with vibrant, visually striking elements that create a more exciting and immersive atmosphere, bringing the solar system to life.
          "
          src="https://github.com/andreasbbusk/Interactive-storytelling/tree/f818196dc0026507706da3722d8516868b40eaec/interactive-storytelling"
          livesite="https://magicplanet.andreasbusk.dk/"
        />
        <section className={styles.image_grid}>
          <div>
            <img src={Exhibition} alt="" />
          </div>
          <div>
            <img src={Space2} alt="" />
          </div>
          <div className={styles.content_vids}>
            <video autoPlay muted loop src={Space1}></video>
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
            <NavHashLink to={"/nippon/#nippon"}>
              <motion.div
                transition={spring}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Nippon
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

export default TheMagicPlanet;
