import Hero from "../components/HomePageSections/hero";
import About from "../components/HomePageSections/About";
import Works from "../components/HomePageSections/Works";
import Contact from "../components/Footer/Footer";
import { useEffect } from "react";

const HomePage = ({ setTheme }) => {
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <>
      <main className="page">
        <Hero />
        <section id="About">
          <About />
        </section>
        <section id="Works">
          <Works />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default HomePage;
