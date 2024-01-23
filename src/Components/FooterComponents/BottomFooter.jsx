import React from 'react'
import AmericanFooterLogo from "../../assets/AmericanFooterLogo.png"
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import visaImg from "../../assets/visa.png"

const BottomFooter = () => {
  return (
    <div className="bottomFooter">
    <div className="aboutFooter">
      <div className="bottomFooterSec">
       <div className="aboutList">
        <div className="topAboutList">
          <h6>SUPPORTS</h6>
        </div>
        <div className="bottomAboutList">
          <ul className="p-0">
            <li>Service and Warranty</li>
            <li>Contact Us</li>
            <li>TSA Lock Instructions</li>
          </ul>
        </div>
       </div>
       <div className="aboutList">
       <div className="topAboutList">
          <h6>QUICK LINKS</h6>
        </div>
        <div className="bottomAboutList">
          <ul className="p-0">
            <li>Damage Policy</li>
            <li>Care and Cleaning</li>
            <li>Packing Tips</li>
            <li>Site Map</li>
          </ul>
        </div>
       </div>
       <div className="aboutList">
       <div className="topAboutList">
          <h6>OUR COMPANY</h6>
        </div>
        <div className="bottomAboutList">
          <ul className="p-0">
            <li>About American Tourister</li>
          </ul>
        </div>
       </div>
       <div className="aboutList">
       <div className="topAboutList">
          <h6>ACCOUNT</h6>
        </div>
        <div className="bottomAboutList">
          <ul className="p-0">
            <li>Track Order</li>
            <li>Sign In</li>
            <li>Shop all products</li>

          </ul>
        </div>
       </div>
      </div>
    </div>
    <div className="aboutFooterIcon">
      <div className="leftAboutFooterIcon">
        <img src={AmericanFooterLogo} alt="" />
      </div>
      <div className="rightAboutFooterIcon">
      <div className="iconFooter">
        <FaFacebookSquare/>
      </div>
        <div className="iconFooter">
          <CiYoutube/>
        </div>
        <div className="iconFooter">
          <FaInstagram/>
        </div>
      </div>
    </div>
    <div className="aboutbottomFooter">
      <div className="topAboutBottomFooter">
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          <li>Personal Information Collection Statement</li>
        </ul>
      </div>
      <div className="bottomAboutBottomFooter">
      <div className="visaIcon">
            <img src={visaImg} alt="" />
          </div>

          <div className="copyRight">
            <h6>Copyright &copy; 2024 Developed and managed by Quadrant</h6>
          </div>
      </div>
    </div>
  </div>
  )
}

export default BottomFooter
