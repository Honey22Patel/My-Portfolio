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
              I have completed my Bachelor of Engineering in Information Technology from Vishwakarma Government Engineering College with a CGPA of 8.96/10.
              </div>
          </div>
          <div className="item-header" style={{marginTop:'1rem'}}>DIPLOMA</div>
          <div className="item-content">
              <div className="item-duration">
                  2019 - 2022
              </div>
              <div className="item-place">Government Polytechnic For Girls, Ahmedabad, Gujarat</div>
        <div className="item-info">
          After securing 95% in 10th standard(SSC), I have completed 3 years diploma course in IT field holding 9.91/10 CGPA along with Academic Appriciation.
              </div>
          </div>
          
    </section>
  )
}

export default EducationInfo

