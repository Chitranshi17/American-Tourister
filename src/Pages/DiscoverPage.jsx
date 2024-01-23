import React from "react";
import DiscoverCard from "../Components/DiscoverSection/DiscoverCard";
import BottomFooter from "../Components/FooterComponents/BottomFooter";
import { FaPlus } from "react-icons/fa";
import AmericanFooterLogo from "../assets/AmericanFooterLogo.png"
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import visaImg from "../assets/visa.png"

const DiscoverPage = () => {
  const data = [
    {
      id: 1,
      image:
        "https://www.americantourister.com.sg/on/demandware.static/-/Sites-sg-americantourister/default/dw2e02b1cf/images/menu/discover/nav-discover_chasing-colours.jpg",
      text: "Chasing Colours Of Travel",
    },
    {
      id: 2,
      image:
        "https://www.americantourister.com.sg/on/demandware.static/-/Sites-sg-americantourister/default/dw5174d3fe/images/menu/discover/nav-discover_travel_buddy_2022.jpg",
      text: "Travel Buddy",
    },
    {
      id: 3,
      image:
        "https://www.americantourister.com.sg/on/demandware.static/-/Sites-sg-americantourister/default/dwd3ab9240/images/menu/discover/nav-discover_the-not-so-solo-solo-travel.jpg",
      text: "The Not So Solo, Solo Travel",
    },
    {
      id: 4,
      image:
        "https://www.americantourister.com.sg/on/demandware.static/-/Sites-sg-americantourister/default/dw7ffe8fca/images/menu/discover/nav-discover_funs_at.jpg",
      text: "Where the funs AT 2022",
    },
    {
      id: 5,
      image:
        "https://www.americantourister.com.sg/on/demandware.static/-/Sites-sg-americantourister/default/dwf097b466/images/menu/discover/nav-discover_ready_set.jpg",
      text: "Ready.Set",
    },
    {
      id: 6,
      image:
        "https://cdn.anscommerce.com/live/image/americantourister/banner/768_202311020253_study_abroad.jpg",
      text: "Study Abroad",
    },
    {
      id: 7,
      image:
        "https://cdn.anscommerce.com/live/image/americantourister/banner/768_202311020253_travel_with_friends.jpg",
      text: "travel with friends",
    },
    {
      id: 8,
      image:
        "https://cdn.anscommerce.com/live/image/americantourister/banner/768_202311020255_little_explorers.jpg",
      text: "little explorers",
    },
  ];

  return (
    <>
      <section id="discoverSec">
        <div id="disCover">
          <div className="discoverHeading">
            <h2>DISCOVER THE LATEST</h2>
          </div>

          <div className="discoverImage">
            {
              data.map((data) => {
                return <DiscoverCard key={data.id} data={data}/>
              })
            }
          </div>
        </div>
      </section>
      <section className="bg-dark bottomFooterDiscover">
        <BottomFooter/>
      </section>


    <div className="bottomACQSec bg-body-tertiary">
      <div className="topACQ">
        <div className="topACQContent">
          <ul>
            <li>
              <span>
                <h3>Support</h3>
                <h4><FaPlus/></h4>
              </span>
            </li>
            <li>
              <span>
                <h3>Quick Links</h3>
                <h4><FaPlus/></h4>
              </span>
            </li>
            <li>
              <span>
                <h3>Our Company</h3>
                <h4><FaPlus/></h4>
              </span>
            </li>
            <li>
              <span>
                <h3>Account</h3>
                <h4><FaPlus/></h4>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomACQ">
        <div className="Acq-top">
          <div className="left-Acq-top">
  <img src={AmericanFooterLogo} alt="" />
          </div>
          <div className="right-Acq-top">
<div className="iconFooter iconColor">
        <FaFacebookSquare/>
      </div>
        <div className="iconFooter  iconColor">
          <CiYoutube/>
        </div>
        <div className="iconFooter  iconColor">
          <FaInstagram/>
        </div>
          </div>
        </div>
        <div className="Acq-bottom">
          <ul>
            <li>Terms & Condition</li>
            <li>Privacy</li>
            <li>Personal Information Collection Statement</li>
          </ul>

          <div className="visaIcon">
            <img src={visaImg} alt="" />
          </div>

          <div className="copyRight">
            <h6>Copyright &copy; 2024 Developed and managed by Quadrant</h6>
          </div>
        
        </div>
      </div>
    </div>
    </>
  );
};

export default DiscoverPage;
