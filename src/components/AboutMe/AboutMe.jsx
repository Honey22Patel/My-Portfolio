import React from "react";
import "./AboutMe.css";
import EducationInfo from "./EducationInfo/EducationInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const AboutMe = () => {
  //   const [activeTab, setActiveTab] = useState("personal");

  return (
    <section className="about-container">
      <h5>About Me</h5>

      <div className="about-content">
        <div className="personal-info">
          <div className="heading">Personal Info</div>
          <PersonalInfo />
        </div>

        <div className="education-info">
          <div className="heading">Education Background</div>
          <EducationInfo />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
