import React, { useEffect } from "react";
import Navbar from "../src/Components/Navbar";
import Hero from "../src/Components/Hero";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import Footer from "../src/Components/Footer";
import { repeatFade } from "../src/utils/repeatFade";
import Projects from "./Components/Projects";

import Skills from "./Components/Skills";

const App = () => {

  useEffect(() => {
    repeatFade(); // run at load

    window.addEventListener("scroll", repeatFade);
    return () => window.removeEventListener("scroll", repeatFade);
  }, []);

  return (
    <>
      <Navbar />

      <div className="fade-section"><Hero /></div>
      <div className="fade-section"><About /></div>
      <div className="fade-section"><Projects /></div>
      <div className="fade-section"><Skills /></div>
      <div className="fade-section"><Contact /></div>

      <Footer />
    </>
  );
};

export default App;

