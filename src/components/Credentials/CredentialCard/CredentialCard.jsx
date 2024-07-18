import React from 'react'
import './CredentialCard.css'
const CredentialCard = ({url, img, title, desc}) => {
  const handleClick = (url) => {
      // console.log(url.url);
        window.open(url.url, '_blank');
    }
  return (
    <div className='achive-card' onClick={() => handleClick({ url })}>
          <div className="img">
              <img src={img} alt="" />
          </div>
          <h6>{title}</h6>
          {/* <div className="underline"></div> */}
      <p className="description">{ desc}</p>
    </div>
  )
}

export default CredentialCard
