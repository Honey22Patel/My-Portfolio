import React from "react";
import "./ContactInfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const ContactInfoCard = ({ icon, size, text, tag }) => {
  return (
    <>
      <div className="contact-details-card">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </div>
          <a href="mailto: honeypatel22dec@gmail.com">honeypatel22dec@gmail.com</a>
      </div>
      <div className="contact-details-card">
        <div className="icon">
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </div>
          <a href="tel: 9099602680">+91 9099602680</a>
      </div>
      <div className="contact-details-card">
        <div className="icon">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
          <a href="https://www.linkedin.com/in/honey-patel-795594231/">View Profile</a>
      </div>
      <div className="contact-details-card">
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </div>
          <a href="https://github.com/Honey22Patel?tab=repositories">View Profile</a>
      </div>

      {/* {
        (tag == 'p') ? <p>{text}</p> :  <a href={text} target='_blank'>View Profile</a>
  } */}
    </>
  );
};

export default ContactInfoCard;
