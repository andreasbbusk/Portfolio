import { NavLink } from "react-router-dom";
import styles from "./ProjectComponentsStyles.module.css";

const ProjectDescription = ({
  pd,
  solution,
  collab,
  pdDays,
  type,
  tag1,
  tag2,
  tag3,
  tag4,
  src,
  livesite,
}) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <section className="project_container">
        <div className={styles.description_container}>
          <div className={styles.key_info}>
            <div>
              <h4>Key Info</h4>
              <hr />
            </div>
            <div className={styles.key_info_box}>
              <div>
                <p>Collaboration:</p>
                <h5>{collab}</h5>
              </div>
              <div>
                <p>Total project days:</p>
                <h5>{pdDays}</h5>
              </div>
              <div>
                <p>Project type:</p>
                <h5>{type}</h5>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <h4>Project Description</h4>
            <hr />
            <p>{pd}</p>
          </div>
          <div className={styles.technologies}>
            <h4>Technologies</h4>
            <hr />
            <ul>
              <li>{tag1}</li>
              <li>{tag2}</li>
              <li>{tag3}</li>
              <li>{tag4}</li>
            </ul>
          </div>
          <div className={styles.solution}>
            <h4>Solution</h4>
            <hr />
            <p>{solution}</p>
          </div>
          <div>
            <h4>Links</h4>
            <hr />
            <div className={styles.link_box}>
              <NavLink to={src}>Github</NavLink>
              <NavLink to={livesite}>Explore live</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDescription;
