import React, { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = ({ onNavItemClick, sections }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item
  
  console.log(activeItem);
  const handleActiveOnClick = (itemName) => {
    setActiveItem(itemName);
  }
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}
        onNavItemClick={onNavItemClick} sections={sections}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Logo"
          />

          <ul>
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
              <a className={`menu-item ${activeItem === "Credentials" ? "active" : ""}`}
                  onClick={() => { 
                    handleActiveOnClick("Credentials");
                  onNavItemClick(sections.Credentials);
                }}>Credentials</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "Projects" ? "active" : ""}`}
                  onClick={() => { 
                    handleActiveOnClick("Projects");
                  onNavItemClick(sections.projects);
                }}>Projects</a>
            </li>
            <li>
              <a className={`menu-item ${activeItem === "Get in Touch" ? "active" : ""}`}
                  onClick={() => {
                    handleActiveOnClick("Get in Touch");
                  onNavItemClick(sections.contactMe);
                }}>Get in Touch</a>
            </li>
           
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
