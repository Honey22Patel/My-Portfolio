import React from "react";
import "./SkillsInfoCard.css";
const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <>
      <div className="skills-info-card">
        <h6>{heading}</h6>
        <div className="skills-info-content">
          {skills.map((item, index) => {
            return (
              <React.Fragment key={`skill_${index}`}>
                <div className="skill-info">
                  <p>{item.skill}</p>
                </div>

                <div className="skill-percentage">
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress"
                      style={{ width: item.percentage }}
                    />
                  </div>
                  <p>{item.percentage}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SkillsInfoCard;
