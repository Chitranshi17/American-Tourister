import React from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "../Components/PageCard/ProductCard";
import { FaStar } from "react-icons/fa";


const LuggagePage = () => {

  const data = [
    {
      id : 1,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LD5001301_1.jpg",
      name : "Manjoris",
      star : "",
      price : "4,975",
      last_price : "9950",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
   },
    {
      id : 2,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/23-June-2023/LE0000301_1.jpg",
      name : "",
      
    },
    {
      id : 3,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/27-mar-2023/LL8001001_1.jpg",
      name : "Maxivo",
      star : "",
      price : "10,800",
      last_price : "13,500",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 4,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/88G409006_1.png",
      name : "Kross Plus",
      star : "",
      price : "4,290",
      last_price : "8,500",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 5,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/HO2040001_1.jpg",
      name : "Fornax",
      star : "",
      price : "6,713",
      last_price : "8,950",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 6,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/27-mar-2023/QJ2011001_1.jpg",
      name : "Airconic",
      star : "",
      price : "5,437",
      last_price : "7,250",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },

    },
    {
      id : 7,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LD9001001_1.jpg",
      name : "Trigard",
      star : "",
      price : "7,480",
      last_price : "8,800",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },

    },
    {
      id : 8,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LE2400601_%201.jpg",
      name : "Skittle",
      star : "",
      price : "2,635",
      last_price : "3,100",
      sizeName : "3 Size",
      size : {
        cabin : "Cabin",
    },
    },
    {
      id : 9,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LE1001301_1.jpg",
      name : ""
    },
    {
      id : 10,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/GP8009001_1.jpg",
      name : ""
    },
    {
      id : 11,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/3-April-2023/FH0016001_1.jpg",
      name : ""
    },
    {
      id : 12,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13-June-2023/lq0001001.jpeg",
      name : ""
    },
    {
      id : 12,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/17jan2024/LG1012001_1.jpg",
      name : ""
    },
    {
      id : 13,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/17jan2024/LG1012001_1.jpg",
      name : "",
    },
    {
      id : 14,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9000001_1.jpg",
      name : "",
    },
    {
      id : 15,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9005001_1.jpg",
      name : "",
    },
    {
      id : 16,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/3-July-2023/QO0111003_1.jpg",
      name : "",
    },
    {
      id : 17,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/23-June-2023/LD8001002_1.jpg",
      name : "",
    },
    {
      id : 18,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04sept2023/QV1074001_1.jpg",
      name : "",
    },
    {
      id : 19,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04oct2023/SB4061001_1.jpg",
      name : "",
    },
    {
      id : 20,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/23-June-2023/LD8001002_1.jpg",
      name : "",
    },
    {
      id : 21,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04sept2023/QV1074001_1.jpg",
      name : "",
    },
    {
      id : 22,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04oct2023/SB4061001_1.jpg",
      name : "",
    },
    {
      id : 23,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/28-Aug-2023/LE1001101_1.jpeg",
      name : "",
    },
    {
      id : 24,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/3-July-2023/MD8006901_1.jpg",
      name : "",
    },
    {
      id : 25,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11oct2023/SB0009001_1.jpg",
      name : "",
    },
    {
      id : 26,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9000001_1.jpg",
      name : "",
    },
    {
      id : 27,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9005001_1.jpg",
      name : "",
    },
    {
      id : 28,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/QI9009002_1.jpg",
      name : "",
    },
    {
      id : 29,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11oct2023/SB0031001_1.jpg",
      name : "",
    },
    {
      id : 30,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/16jan2024/88G409005_1.jpg",
      name : "",
    },
    {
      id : 31,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11oct2023/LR5000001_1.jpg",
      name : "",
    },
    {
      id : 32,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/02nov2023/LR9008001_1.jpg",
      name : "",
    },
    {
      id : 33,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29dec2023/LR7001001_1.jpg",
      name : "",
    },
  ]

  return (
    <>
      <section className="luggageSection">
        <div className="luggageSec">
          <div class="item1">
            <div className="luggageBg"></div>
          </div>
          <div class="item2">
            <div className="columnLeft">
              <div className="mainTopColumnLeft">
                <span>
                  <p> <FaHome/></p>
                  <p><FaAngleRight/></p>
                  <p className="mx-3">Luggage</p>
                </span>
              </div>
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
                  <h3>Luggage Bags</h3>
                  <h5>{data.length}</h5>
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



            {
              data.map(data => <ProductCard key={data.id} data={data}/>)
            }

            

             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LuggagePage;
