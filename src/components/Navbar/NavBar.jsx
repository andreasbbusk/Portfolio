import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.styles.module.css";
import { NavHashLink } from "react-router-hash-link";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.navbar}>
            <NavLink to="/" reloadDocument>
              <svg
                width="74"
                height="57"
                viewBox="0 0 85 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${styles.logo} ${navOpen ? styles.stroke : ""}`}
                  d="M71 88C71 58.4507 42.1686 60.0266 42.1686 60.0266C42.1686 60.0266 14 58.0567 14 88"
                  stroke="#000000"
                  strokeWidth="26"
                />
                <path
                  className={`${styles.logo} ${navOpen ? styles.stroke : ""}`}
                  d="M71 42C71 12.4507 42.1686 14.0266 42.1686 14.0266C42.1686 14.0266 14 12.0567 14 42"
                  stroke="#000000"
                  strokeWidth="26"
                />
                <line
                  className={`${styles.logo} ${navOpen ? styles.stroke : ""}`}
                  x1="70.9502"
                  y1="37.9951"
                  x2="70.9502"
                  y2="87.9951"
                  stroke="#000000"
                  strokeWidth="26"
                />
              </svg>
            </NavLink>
            <div onClick={() => setNavOpen(!navOpen)}>
              <div
                className={
                  navOpen
                    ? `${styles.hamBox} ${styles.hamBoxOpen}`
                    : styles.hamBox
                }
              >
                <span
                  className={
                    navOpen
                      ? `${styles.lineTop} ${styles.spin}`
                      : styles.lineTop
                  }
                ></span>
                <span
                  className={
                    navOpen
                      ? `${styles.lineBottom} ${styles.spin}`
                      : styles.lineBottom
                  }
                ></span>
              </div>
            </div>
          </div>
          <div
            className={styles.nav_overlay}
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className={styles.nav_links}>
              <li className={styles.nav_item}>
                <NavHashLink 
                  to={"/"}
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.3s" : "0s",
                  }}
                >
                  Home
                </NavHashLink>
                <div className={styles.nav_item_wrapper}></div>
              </li>
              <li className={styles.nav_item}>
                <NavHashLink 
                  to={"/#About"}
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.4s" : "0s",
                  }}
                >
                  About
                </NavHashLink>
                <div className={styles.nav_item_wrapper}></div>
              </li>
              <li className={styles.nav_item}>
                <NavHashLink 
                  to={"/#Works"}
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.4s" : "0s",
                  }}
                >
                  Works
                </NavHashLink>
                <div className={styles.nav_item_wrapper}></div>
              </li>
              <li className={styles.nav_item}>
                <NavHashLink reloadDocument
                  to={"/#Contact"}
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.6s" : "0s",
                  }}
                >
                  Contact
                </NavHashLink>
                <div className={styles.nav_item_wrapper}></div>
              </li>
            </ul>
            <div className={styles.nav_footer}>
              <div
                className={styles.location}
                style={{
                  bottom: navOpen ? "0" : "-20px",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "0.7s" : "0",
                }}
              >
                <span>Aarhus, Denmark</span>
              </div>
              <div className={styles.nav_socials}>
                <ul>
                  <li>
                    <NavLink 
                      to={"https://github.com/andreasbbusk"}
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.8s" : "0",
                      }}
                    >
                      Github
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"https://www.linkedin.com/in/andreas-busk-mikkelsen/"}
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "0.8s" : "0",
                      }}
                    >
                      LinkedIn
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
