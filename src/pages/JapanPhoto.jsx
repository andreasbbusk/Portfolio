import { useEffect } from "react";
import ProjectTitle from "../components/ProjectComponents/ProjectTitle";
import ProjectDescription from "../components/ProjectComponents/ProjectDescription";
import styles from "../components/ProjectComponents/ProjectComponentsStyles.module.css";
import { motion } from "framer-motion";
import JapanFront from "../assets/japanphoto.png";
import JapanVid from "../assets/japanphoto.mp4";
import JapanContent1 from "../assets/japan2.png";
import JapanContent2 from "../assets/japan3.png";
import Footer from "../components/Footer/Footer";
import { NavHashLink } from "react-router-hash-link";

const JapanPhoto = ({ setTheme }) => {
  useEffect(() => {
    setTheme("japan"); // Set the 'japan' theme when this page is loaded
  }, [setTheme]);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <main id="japanphoto" className="project-container page">
        <ProjectTitle title="Japan" secondtitle="Photo" />
        <div>
          <img src={JapanFront} alt="" />
        </div>
        <ProjectDescription
          collab="Group Project"
          pd="How can we visually upgrade JapanPhoto's website to modernize its design, enhance user experience, and create a more cohesive brand identity across product pages and services?"
          solution="We redesigned the product pages with larger, high-quality images and a cleaner layout, making it easier for users to browse and select products. We created a set of custom icons for the passport photo section, making the service more intuitive and visually appealing for users. We updated the brand identity with modern colors, typography, and design elements, creating a consistent and professional look across the site."
          pdDays="14 days"
          type="Visual Identity & Web development"
          tag1="HTML"
          tag2="CSS"
          tag3="Figma"
          tag4="Illustrator"
          src="https://github.com/andreasbbusk/Mobile-First/tree/7e107778978413c8b58f346d2de0c25855137c46/japanphoto"
          livesite="https://japanphoto.andreasbusk.dk/"
        />

        <section className={styles.image_grid}>
          <div>
            <img src={JapanContent1} alt="" />
          </div>
          <div>
            <img src={JapanContent2} alt="" />
          </div>
          <div className={styles.content_vids}>
            <video autoPlay muted loop src={JapanVid}></video>
          </div>
        </section>

        <section className={styles.project_navigation}>
          <div className={styles.navigation_header}>
            <h4>Other Projects</h4>
            <div className={styles.project_line}></div>
          </div>
          <div className={styles.navigation_links}>
            <NavHashLink to={"/magicplanet/#magicplanet"}>
              <motion.div
                transition={spring}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                The Magic Planet
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

export default JapanPhoto;
