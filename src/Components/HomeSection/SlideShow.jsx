import React from 'react'
import Slide1 from "../../assets/Slide1.png"
import Slide2 from "../../assets/Slide2.png"
import Slide3 from "../../assets/Slide3.png"
import { FaAngleRight } from "react-icons/fa";



const SlideShow = () => {
  return (
    <>
   <div className="slideSection">
   <div className="slide-sec">
      <div className="slideCreate">
        <div className="circleDesign">
        <div className="circle circleYellow">
          <img src={Slide1} alt="" />
        </div>
        <div className="circleText">
          <h3>Luggage <br />More <FaAngleRight/></h3>
        </div>
        </div>
       <div className="circleDesign">
       <div className="circle circleBlue">
          <img src={Slide2} alt="" />
        </div>
        <div className="circleText">
          <h3>Backpacks <br /> More <FaAngleRight/></h3>
        </div>
       </div>
       <div className="circleDesign">
       <div className="circle circleWhite">
          <img src={Slide3} alt="" />
        </div>
        <div className="circleText">
          <h3>Duffles <br /> More <FaAngleRight/></h3>
        </div>
       </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default  SlideShow;
