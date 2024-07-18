import React from "react";

import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";
import ContactForm from "./ContactForm/ContactForm";
const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Get in Touch</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
        <div style={{ flex: 1 }}>
            {/* <ContactInfoCard
              icon={faEnvelope}
              size="lg"
              text="honeypatel22dec@gmail.com"
              tag="p"
            />
            <ContactInfoCard
              icon={faPhone}
              size="lg"
              text="+91 9099602680"
              tag="p"
            />
            <ContactInfoCard
              icon={faLinkedin}
              size="xl"
              text="https://www.linkedin.com/in/honey-patel-795594231/"
              tag="a"
            />
            
            <ContactInfoCard
              icon={faGithub}
              size="xl"
              text="https://github.com/Honey22Patel?tab=repositories"
              tag="a"
            /> */}
          <ContactInfoCard />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
