import Portrait from "../../assets/profilepicture.jpeg";
import styles from "./HomePageStyles.module.css";
import Toolbox from "./Toolbox";
import { NavHashLink } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <section className="project-container">
        <div className={styles.about_title}>
          <h1 >Digital designer & Web Developer </h1>
        </div>
        <div className={styles.about}>
          <div className={styles.about_topline}>
            <div>
              <h4>About</h4>
            </div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.about_section}>
            <div>
              <img src={Portrait} alt="Self portrait" />
            </div>
            <div className={styles.about_info}>
              <h4>About Me</h4>
              <h2 id="name_title" className={styles.bd_header}>
                Andreas Busk Mikkelsen
              </h2>
              <h2 className={styles.info_header}>
                I craft digital experiences combining <strong>design, </strong>{" "}
                <strong>motion</strong> & <strong>development</strong>
              </h2>
              <p>
                I'm a passionate multimedia designer with a focus on creating
                user-friendly and visually engaging digital experiences. While
                continually building my skills, I approach every project with
                enthusiasm and a commitment to crafting unique experiences. <br />I'm
                driven by a curiosity to explore new tools and techniques, and I
                love turning creative ideas into practical solutions.
              </p>
              <NavHashLink to={"/#Contact"} className={styles.btn}>Get in touch</NavHashLink>
            </div>
          </div>
          <div className={styles.about_topline}>
            <div>
              <h4>About</h4>
            </div>
            <div className={styles.line}></div>
          </div>

          <Toolbox />
          <div className={styles.about_topline}>
            <div>
              <h4>About</h4>
            </div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.about_toolbox}>
            <div>
              <h2>Skills</h2>
            </div>
            <div className={styles.skill_container}>
              <div className={styles.skill_list}>
                <h3>Web Design</h3>
                <p>UX/UI Design</p>
                <p>Prototyping</p>
                <p>Responsive Design</p>
              </div>
              <div className={styles.skill_list}>
                <h3>Brand Design</h3>
                <p>Visual identity</p>
                <p>Storytelling</p>
              </div>
              <div className={styles.skill_list}>
                <h3>Motion Design</h3>
                <p>UI animation</p>
                <p>Logo Animation</p>
                <p>3D Models</p>
              </div>
              <div className={styles.skill_list}>
                <h3>Web Development</h3>
                <p>Front-end Development</p>
                <p>Content Management Systems</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
