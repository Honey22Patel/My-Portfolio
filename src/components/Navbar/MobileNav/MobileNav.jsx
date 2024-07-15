import React, { useState } from 'react'
import './MobileNav.css';
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MobileNav = ({ isOpen, toggleMenu, onNavItemClick, sections }) => {
  const pdfFilePath = process.env.PUBLIC_URL + './assets/HoneyPatel_Resume.pdf';
  const handleDownload = () => {
    // const link = document.createElement('a');
    // link.href = process.env.PUBLIC_URL + './assets/Resume.pdf'; // Path to your PDF file
    // link.download = 'HoneyPatel_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link); 
     window.open(pdfFilePath, '_blank');
   
  };
  const [activeItem, setActiveItem] = useState("Home"); // Default active item
  
  console.log(activeItem);
  const handleActiveOnClick = (itemName) => {
    setActiveItem(itemName);
  }

  return (
      <>
          <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
              <div className="mobile-menu-container">
                  <img src="./assets/images/logo.png" alt="" className="logo"/>

                  <ul>
                    {/* <li className="menu-item">Home</li>
                    <li className="menu-item">About Me</li>
                    <li className="menu-item">Skills</li>
                    <li className="menu-item">Projects</li>
                    <li className="menu-item">Achievements</li>
                    <li className="menu-item">Get in Touch</li> */}
            
            <li>
              <a className={`menu-item ${activeItem === "Home" ? "active" : ""}`}
                onClick={() => { 
                    handleActiveOnClick("Home")
                    onNavItemClick(sections.hero);}}>Home</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "About Me" ? "active" : ""}`}
                onClick={() => {
                  handleActiveOnClick("About Me");
                  onNavItemClick(sections.aboutMe);
                }}>About Me</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "Skills" ? "active" : ""}`}
                  onClick={() => { 
                    handleActiveOnClick("Skills");
                  onNavItemClick(sections.skills);
                }}>Skills</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "Projects" ? "active" : ""}`}
                  onClick={() => { 
                    handleActiveOnClick("Projects");
                  onNavItemClick(sections.projects);
                }}>Projects</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "Achivements" ? "active" : ""}`}
                  onClick={() => { 
                    handleActiveOnClick("Achivements");
                  onNavItemClick(sections.achivements);
                }}>Achivements</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "Get in Touch" ? "active" : ""}`}
                  onClick={() => {
                    handleActiveOnClick("Get in Touch");
                  onNavItemClick(sections.contactMe);
                }}>Get in Touch</a>
            </li>
            <button className="download-btn" onClick={handleDownload}>Download CV</button>
            
            <div className="mobile-hero-icons">
            <a
              href="https://www.linkedin.com/in/honey-patel-795594231/"
              target="_blank"
              className="mobile-custom-style"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
                href="https://github.com/Honey22Patel?tab=repositories"
                target="_blank"
              className="mobile-custom-style"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a></div>
                  </ul>
              </div>
        </div>
      </>
  )
}

export default MobileNav
