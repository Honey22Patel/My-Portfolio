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
          <ContactInfoCard />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
