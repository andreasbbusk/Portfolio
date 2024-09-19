import styles from "./ProjectComponentsStyles.module.css";

const ProjectTitle = ({ title, secondtitle, src, videosrc }) => {
  return (
    <>
      <div className={styles.Project_title}>
        <h1 className={styles.header}> {title} </h1>
        <h1 className={styles.header}> {secondtitle} </h1>
        <hr className={styles.project_hr} />
      </div>
    </>
  );
};

export default ProjectTitle;
