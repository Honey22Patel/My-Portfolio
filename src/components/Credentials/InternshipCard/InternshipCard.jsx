import React from "react";
import "./InternshipCard.css";
const InternshipCard = ({ title, location, duration, description }) => {
  return (
    <div>
      <div className="internship-card">
        <div className="title">
          <span className="titleName">{title}</span>
          <span className="titleLoc"> @ {location}</span>
        </div>
        <div className="internship-duration">{duration}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default InternshipCard;
