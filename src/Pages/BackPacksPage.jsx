import React from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const BackPackPage = () => {
  return (
    <>
      <section className="luggageSection">
        <div className="luggageSec">
          <div class="item1">
            <div className="backPacksBg"></div>
          </div>
          <div class="item2">
          <div className="mainTopColumnLeft">
                <span>
                  <p> <FaHome/></p>
                  <p><FaAngleRight/></p>
                  <p className="mx-3">BackPacks</p>
                </span>
              </div>
            <div className="columnLeft">
              <div className="topColumnLeft">
                <h4>Categories</h4>
              </div>
              <div className="bottomCloumnLeft"></div>
            </div>
          </div>
          <div class="item3">
            <div className="topMain">
              <div className="lefttopMain">
                <span>
                  <h3>BackPacks</h3>
                  <h5>32 items</h5>
                </span>
              </div>
              <div className="righttopMain">
              <span>
                <p className="mb-0">Sort By</p>
                <form action="">
                  <select name="" id="">
                    <option value="1">BestSeller</option>
                    <option value="2">Popularity</option>
                    <option value="3">Discount</option>
                    <option value="4">Price: Low to High</option>
                    <option value="5">Price : High to Low</option>
                  </select>
                </form>
              </span>
              </div>
            </div>
            <div className="bottomMain bg-body-tertiary">
             <div className="bottomMainSec">



             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>


             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>


             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>


             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>


             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>


             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>


             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>

              
             <div className="mainCard">
                <div className="topMainCard"></div>
                <div className="bottomMainCard"></div>
              </div>



             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackPackPage ;
