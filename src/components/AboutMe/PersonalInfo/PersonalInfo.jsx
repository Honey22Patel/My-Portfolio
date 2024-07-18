import React from "react";
import "./PersonalInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const PersonalInfo = () => {
  return (
    <>
    <section className="info-container">
      <div className="info-content">
        <div className="info-icon">
          <FontAwesomeIcon icon={faUser} className="icon-color" />
        </div>
        <div className="info-data">Honey Patel</div>
      </div>
      <div className="info-content">
        <div className="info-icon">
          <FontAwesomeIcon icon={faLocationDot} className="icon-color" />
        </div>
        <div className="info-data">Ahmedabad, Gujarat, India</div>        
        </div>
      <div className="info-content">
        <div className="info-icon">
          <FontAwesomeIcon icon={faPhone} className="icon-color" />
        </div>
        <div className="info-data"><a href="tel: 9099602680">+91 9099602680</a></div>
      </div>
      <div className="info-content">
      
        <div className="info-icon">
          <FontAwesomeIcon icon={faEnvelope} className="icon-color" />
        </div>
        <div className="info-data"><a href="mailto: honeypatel22dec@gmail.com">honeypatel22dec@gmail.com</a></div>
      </div>
    </section>
    <section className="extra-container">
        <div className="hobbies">
          <div className="extra-Header">
              MY HOBBIES
          </div>
          <div className="extra-content">
            <ul className="list">
              <li>Art and Craft</li>
              <li>Yoga</li>
              <li>Reading</li>
            </ul>
          </div>
        </div>
        <div className="languages">
          <div className="extra-Header">
              KNOWN LANGUAGES
          </div>
          <div className="extra-content">
            <ul className="list">
                <li>English</li>
                <li>Hindi</li>
                <li>Gujarati</li>
              </ul>
          </div>
        </div>
    </section>
    </>
  );
};

export default PersonalInfo;
