import { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import ProjectTitle from "../components/ProjectComponents/ProjectTitle";
import ProjectDescription from "../components/ProjectComponents/ProjectDescription";
import HOF1 from "../assets/hof1.png";
import HOF2 from "../assets/hof2.png";
import HOFFront from "../assets/hof-front.png";
import HOFVid from "../assets/hof-vid.mp4";
import Footer from "../components/Footer/Footer";
import styles from "../components/ProjectComponents/ProjectComponentsStyles.module.css";

const HOF = ({ setTheme }) => {
  useEffect(() => {
    setTheme("hof"); // Set the 'hof' theme when this page is loaded
  }, [setTheme]);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <main id="hof" className="project-container page">
        <ProjectTitle title="Holm Outdoor Fitness" />
        <div>
          <img src={HOFFront} alt="Project image" />
        </div>
        <ProjectDescription
          collab="Group Exam"
          pd="How can we create a digital solution for Holm Outdoor Fitness that highlights the community, reflects company values, and simplifies the onboarding process?"
          solution="I simplified the booking system, making it easy for users to buy memberships and check class schedules, creating a smooth and user-friendly experience. I designed the visual elements to fit the needs of the target audience, helping Holm Outdoor Fitness build a strong and clear digital identity. By focusing on user experience, I ensured the solution not only meets user needs but also supports HOF’s goals and values, helping them grow their community."
          pdDays="20 days"
          type="Brand design & development"
          tag1="HTML"
          tag2="CSS"
          tag3="JavaScript"
          tag4="Figma"
          src="https://github.com/andreasbbusk/Eksamen---2.-semester.git"
          livesite="https://hof.andreasbusk.dk/"
        />

        <section className={styles.image_grid}>
          <div>
            <img src={HOF1} alt="Project image" />
          </div>
          <div>
            <img src={HOF2} alt="Project image" />
          </div>
          <div className={styles.content_vids}>
            <video autoPlay muted loop src={HOFVid}></video>
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
            <NavHashLink to={"/japanphoto/#japanphoto"}>
              <motion.div
                transition={spring}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                JapanPhoto
              </motion.div>
            </NavHashLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HOF;
