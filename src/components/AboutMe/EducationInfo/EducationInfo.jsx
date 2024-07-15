import React from 'react'
import './EducationInfo.css';
const EducationInfo = () => {
  return (
    <section className='item-container'>
          <div className="item-header">BACHELOR OF ENGINEERING</div>
          <div className="item-content">
              <div className="item-duration">
                  2022 - 2025
              </div>
              <div className="item-place">Vishwakarma Government Engineering College, Ahmedabad, Gujarat</div>
              <div className="item-info">
              I am a final year student in the Information Technology field at Vishwakarma Government Engineering College. In my most recent semester, I have achieved 8.78 CGPA till previous semester.
              </div>
          </div>
          <div className="item-header" style={{marginTop:'1rem'}}>DIPLOMA</div>
          <div className="item-content">
              <div className="item-duration">
                  2019 - 2022
              </div>
              <div className="item-place">Government Polytechnic For Girls, Ahmedabad, Gujarat</div>
              <div className="item-info">
              I completed 3 years diploma course in IT field after my 10th standard (SSC) with 9.91 CGPA.
              </div>
          </div>
          
    </section>
  )
}

export default EducationInfo

