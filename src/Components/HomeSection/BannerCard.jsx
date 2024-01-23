import React from 'react'

const BannerCard = ({data}) => {
  
  return (
    <div className="bannerDesign">
    <div className="leftImage">
      <div className="leftBannerImage">
        <img src={data.image} alt="" />
      </div>
    </div>
    <div className="rightText">
      <div className="rightBannerText bannerText">
        <div className="topHeadingbanner">
        <h2>{data.heading}</h2>
        <div className="underLine"></div>
        </div>
        <p>{data.content}</p>
        <button>{data.btnContent}</button>
      </div>
    </div>
   </div>
  )
}

export default BannerCard
