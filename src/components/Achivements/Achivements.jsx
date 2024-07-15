import React from 'react'
import { CERTI } from '../../utils/Data'
import AchiveCard from './AchiveCard/AchiveCard'
import './Achivements.css'
const Achivements = () => {
  return (
      <section className="achive-container">
          <h5>Achivements and Certificates</h5>
      <div className="achive-content">
        {
          CERTI.map((item,index) => {
            return (
              <AchiveCard url={item.url} img={item.img} title={item.title} desc={ item.description} key={index} />
            )
          })
        }
          </div>
    </section>
  )
}

export default Achivements
