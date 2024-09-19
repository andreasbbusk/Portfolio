import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HOF from "./pages/HOF";
import JapanPhoto from "./pages/JapanPhoto";
import TheMagicPlanet from "./pages/MagicPlanet";
import NipponProject from "./pages/Nippon";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Works from "./components/HomePageSections/Works";
import About from "./components/HomePageSections/About";
import { HashLink, NavHashLink } from "react-router-hash-link";


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to the document when the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage setTheme={handleThemeChange} />} />
        <Route path="/japanphoto" element={<JapanPhoto setTheme={handleThemeChange} />} />
        <Route path="/hof" element={<HOF setTheme={handleThemeChange} />} />
        <Route path="/magicplanet" element={<TheMagicPlanet setTheme={handleThemeChange} />} />
        <Route path="/nippon" element={<NipponProject setTheme={handleThemeChange} />} />
      </Routes>

    </>
  );
}

export default App;
