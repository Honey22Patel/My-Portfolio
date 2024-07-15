import React from 'react'
import './ProjectCard.css';
const ProjectCard = ({ data }) => {
    
    let { title, tech, description, url } = data;
  return (
    <div className='project-card'>
          <h6>{title}</h6>
          <div className="tech">
              {tech}
          </div>
          <ul>
              <li>{description}</li>
          </ul>
          <div className="underline"></div>
          <div className="link">
              <a href={url} target="_blank">View Source Code</a>
          </div>
    </div>
  )
}

export default ProjectCard
