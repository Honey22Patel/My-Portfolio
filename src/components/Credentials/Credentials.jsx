import React from "react";
import { CERTI, INTERNSHIP } from "../../utils/Data";
import CredentialCard from "./CredentialCard/CredentialCard";
import "./Credentials.css";
import InternshipCard from "./InternshipCard/InternshipCard";
const Credentials = () => {
  return (
    <section className="achive-container">
      <h5>Credentials</h5>
      <div className="heading1">Internships</div>
      <div className="achive-content1">
        {INTERNSHIP.map((item, index) => {
          return (
            <InternshipCard
              title={item.title}
              location={item.location}
              duration={item.duration}
              description={item.description}
              key={index}
            />
          );
        })}

      </div>

        <div className="heading2">Certificates</div>
        <div className="achive-content2">
        {CERTI.map((item, index) => {
          return (
            <CredentialCard
              url={item.url}
              img={item.img}
              title={item.title}
              desc={item.description}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Credentials;
