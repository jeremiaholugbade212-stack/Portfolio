import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { repeatFade } from "./utils/repeatFade";
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

