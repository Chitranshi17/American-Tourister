import React from 'react'

const DiscoverCard = ({data}) => {
  return (
    <div className="discoverCard">
    <div className="topDiscover">
      <img src={data.image} alt="" />
    </div>
    <div className="bottomDiscover">
      <h3>{data.text}</h3>
    </div>
  </div>
  )
}

export default DiscoverCard
