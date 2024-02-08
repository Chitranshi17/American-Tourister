import React from 'react'

const SocialCard = ({data}) => {
  return (
    <div className="socialCard d-flex align-items-center justify-content-center overflow-hodden">
      <div className="socialCardContent">
      {data.video}
      </div>
    </div>
  )
}

export default SocialCard
