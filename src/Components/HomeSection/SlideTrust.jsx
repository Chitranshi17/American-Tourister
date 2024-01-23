import React from "react";
import delivery from "../../assets/ico-delivery.svg";
import internet from "../../assets/internet.webp";
import right from "../../assets/right.png";
import collection from "../../assets/collection.svg";
const SlideTrust = () => {
  return (
    <>
      <div className="slideTrustContainer">
        <div className="slideTrustSec">
         <div className="slideTrustContent">
         <div className="slideTrustCard">
            <div className="topSlideTrustCard">
              <img src={internet} alt="" />
            </div>
            <div className="bottomSlideTrustCard">
              <h4>International Warranty</h4>
              <p>
                American Tourister is a trusted global brand offering
                high-quality travel products like luggage, backpacks, and
                accessories. With a presence in 120+ countries, it's a go-to for
                millions of travelers.
              </p>
            </div>
          </div>
          <div className="slideTrustCard">
            <div className="topSlideTrustCard">
              <img src={delivery} alt="" />
            </div>
            <div className="bottomSlideTrustCard">
              <h4>Fast Delivery</h4>
              <p>
                We deliver online orders to most of India within 5-7 working
                days via efficient courier services.
              </p>
            </div>
          </div>
          <div className="slideTrustCard">
            <div className="topSlideTrustCard">
              <img src={right} alt="" />
            </div>
            <div className="bottomSlideTrustCard">
              <h4>Trusted Globally Since 1933</h4>
              <p>
                American Tourister innovates with award-winning luggage produced
                with world-class quality standards.
              </p>
            </div>
          </div>
          <div className="slideTrustCard">
            <div className="topSlideTrustCard">
              <img src={collection} alt="" />
            </div>
            <div className="bottomSlideTrustCard">
              <h4>Full Original Store</h4>
              <p>
                One-stop shop for exploring the complete American Tourister
                collection online.
              </p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default SlideTrust;
