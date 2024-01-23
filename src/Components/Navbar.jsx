import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import logoimg from "../assets/logo.webp";
import shopimg from "../assets/shop-copy.svg";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = (e) => {
    e.preventDefault();
    if (clicked) {
      setClicked(false);
      console.log("false");
    } else {
      setClicked(true);
      console.log("true");
    }
  };

  return (
    <div className="navbar nav d-flex align-items-center justify-content-center">
      <div className="navMain">
        <div className="leftNav d-flex align-items-center justify-content-center">
          <div className="leftNavLogo">
           <Link to="/"> <img src={logoimg} alt="" /></Link>
          </div>
        </div>

        <div className="midNav">
          <ul>
            <li className="crossIcon">
              {" "}
              <RxCross2 />{" "}
            </li>
            <li className="shopLogo">
              <img src={shopimg} alt="" />
            </li>
            <li className="resLi">
              <Link to="/luggage">Luggage</Link>
            </li>
            <li>
              <Link to="/backpacks">Backpacks</Link>
            </li>
            <li>
              <Link to="/duffles">Duffles</Link>
            </li>
            <li>
              <Link to="/browsemore">Browse More</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
          </ul>
        </div>
        <div className="rightNav d-flex align-items-center justify-content-center">
          <ul>
            <li>
              <a href="">
                <GrMapLocation />
              </a>
            </li>
            <li>
              <a href="" className="user">
                <GoPerson />
              </a>
            </li>
            <li>
              <a href="">
                <IoSearchOutline />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineShoppingCart />
              </a>
            </li>
          </ul>
          <div className="menubar" onClick={(e) => handleClicked(e)}>
            <a href="">
              {clicked ? <FaBars /> : <RxCross2 />}
              {/* <FaBars/> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
