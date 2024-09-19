import styles from "./HomePageStyles.module.css";


const Toolbox = () => {
  return (
    <>
      <div className={styles.about_toolbox}>
        <h2>Toolbox</h2>
        <div className={styles.skills}>
          <div className={styles.tech_stack}>
            <div className={styles.tech_icons}>
              <p>HTML</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>CSS</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>JavaScript</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>React</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>Tailwind</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>Framer Motion</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>Firebase</p>
              <div className={styles.red_dot}></div>
            </div>
            <div className={styles.tech_icons}>
              <p>WordPress</p>
              <div className={styles.red_dot}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbox;
