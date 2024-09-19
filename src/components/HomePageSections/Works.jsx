import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./HomePageStyles.module.css";

const Works = () => {
  return (
    <>
      <section className="container">
        <h1 className={styles.work_title}>Selected Works</h1>
        <div className={styles.works_header}>
          <h2>Explore my</h2>
          <h2 className={styles.bd_header}>Projects</h2>
        </div>
          <p className={styles.works_body}>Generel overview over my highlighted projects</p>
        <div className={styles.vertical_line}></div>
      </section>
      <section className="project-container">
        <div>
          <ProjectCard
            link={"/japanphoto"}
            theme="japan" // Added theme here
            number="01"
            title="JapanPhoto"
            tag="Web Development / Visual identity"
          />

          <ProjectCard
            link={"/magicplanet"}
            theme="magicplanet" // Added theme here
            number="02"
            title="The Magic Planet"
            tag="3D Animation / Design & Web development"
          />

          <ProjectCard
            link={"/hof"}
            theme="hof" // Added theme here
            number="03"
            title="Holm Outdoor Fitness"
            tag="Web Development / Design"
          />

          <ProjectCard
            link={"/nippon"}
            theme="nippon" // Added theme here
            number="04"
            title="Nippon"
            tag="Web Development / Design"
          />
        </div>
      </section>
    </>
  );
};

export default Works;
