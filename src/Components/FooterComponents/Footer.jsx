import React from "react";
import BottomFooter from "./BottomFooter";
import MidFooter from "./MidFooter";



const Footer = () => {
  return (
    <>
      <div className="footerSec">
        <div className="topFooter">
          <div className="topFooterSec">
            <h4>POPULAR SEARCHES</h4>
            <div className="slashItems">
              <p>
                <a href="">LuggageBags</a> | <a href="">Cabin Bags</a> |{" "}
                <a href="">Laptop Bags </a> | <a href=""> Duffle Bags</a> |{" "}
                <a href="">Backpacks</a> | <a href="">Hard Trolley Bags </a> |{" "}
                <a href="">Lock for Bags </a> | <a href="">Soft Trolley Bags</a>{" "}
                | <a href="">Casual Backpacks</a> | <a href="">Trekking Bags</a>{" "}
                | <a href="">School Bags </a> | <a href="">College Bags</a> |{" "}
                <a href="">Office Bags</a> | <a href="">Wheel Duffle Bags</a> |{" "}
                <a href=""> Kids Backpack</a> | <a href="">Briefcase Bags</a> |{" "}
                <a href="">Sling Bags</a> | <a href="">Travel Neck Pillow</a> |{" "}
                <a href="">Travel Eye Mask</a> |{" "}
                <a href="">Large Trolley Bags</a> |{" "}
                <a href=""> Medium Size Trolley Bags</a> |{" "}
                <a href="">Weekender Bags </a> |{" "}
                <a href="">Travel Bags for Short Trips</a> |{" "}
                <a href=""> Luggage for Long Trip</a> |{" "}
                <a href="">Kids Luggage</a>
              </p>
            </div>
          </div>
        </div>
      <MidFooter/>
      <BottomFooter/>
      </div>
    </>
  );
};

export default Footer;
