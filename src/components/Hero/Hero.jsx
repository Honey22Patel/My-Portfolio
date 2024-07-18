import React from "react";
import "./Hero.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
  const pdfFilePath = "https://drive.google.com/file/d/1btZPoeLm27On7IOtyXTm95Q8mbrNOb1I/view?usp=sharing";
  
  const handleDownload = () => {
    window.open(pdfFilePath);
  };

  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Hi There, Honey Here</h2>
          <p>
            Passionate Frontend Developer Trnasforming ideas into seamless and
            visually stunning solution and Data Analytics Enthusiast
          </p>
          <div className="hero-buttons">
            <button className="download-btn" onClick={handleDownload}>
              Download CV
            </button>
            <div className="hero-icons">
            <a
              href="https://www.linkedin.com/in/honey-patel-795594231/"
              target="_blank"
              className="custom-style"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
                href="https://github.com/Honey22Patel?tab=repositories"
                target="_blank"
              className="custom-style"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a></div>
          </div>
        </div>
        <div className="hero-img">
          <img src={`${process.env.PUBLIC_URL}/assets/images/Picture1.png`} alt="" />
        </div>
      </section>
    </>
  );
};
export default Hero;
