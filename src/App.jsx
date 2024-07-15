import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Achivements from "./components/Achivements/Achivements";

const App = () => {
  const navbarHeight = 20; // Adjust based on your navbar height
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);
  const achivementRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - navbarHeight,
      behavior: "smooth",
    });

  };

  return (
    <>
      <Navbar
        onNavItemClick={scrollToSection}
        sections={{
          hero: heroRef,
          aboutMe: aboutMeRef,
          skills: skillsRef,
          projects: projectsRef,
          contactMe: contactMeRef,
          achivements: achivementRef,
        }}
      />
      <div className="container">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <MyProjects />
        </div>
        <div ref={achivementRef}>
          <Achivements/>
        </div>
        <div ref={contactMeRef}>
          <ContactMe />
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default App;
