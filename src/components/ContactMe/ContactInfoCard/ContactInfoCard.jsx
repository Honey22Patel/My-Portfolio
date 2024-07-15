import React from 'react'
import './ContactInfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactInfoCard = ({icon, size, text, tag}) => {
  return (
    <div className='contact-details-card'>
      <div className="icon">
        <FontAwesomeIcon icon={icon} size={size} />
      </div>
      {
        (tag == 'p') ? <p>{text}</p> :  <a href={text} target='_blank'>View Profile</a>
      }
    </div>
  )
}

export default ContactInfoCard
