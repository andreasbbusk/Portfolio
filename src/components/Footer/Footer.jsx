import styles from "./FooterStyles.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_titles}>
            <h2>Looking for new talent?</h2>
            <h1>talent@andreasbusk.dk</h1>
          </div>
          <div className={styles.footer_links}>
            <NavLink to={"https://www.linkedin.com/in/andreas-busk-mikkelsen/"}>
              <div className={styles.yellow_dot}></div>LinkedIn
            </NavLink>
            <NavLink to={"https://github.com/andreasbbusk"}>
              <div className={styles.yellow_dot}></div>Github
            </NavLink>
            {/* COMING LATER */}
            <a href="">
              <div className={styles.yellow_dot}></div>Download CV
            </a>
          </div>
        </div>
        <div className={styles.footer_credit}>
          <p>2024 © Andreas Busk</p>
          <p>Made By Andreas Busk</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
