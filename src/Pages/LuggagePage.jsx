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
      name : "FRONTEC",
      star : "",
      price : "19,000",
      last_price : "23,750",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 3,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/27-mar-2023/LL8001001_1.jpg",
      name : "Maxivo",
      star : "",
      price : "10,800",
      last_price : "13,500",
      sizeName : "3 Size",
      btnText : "Add to Card",
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
      btnText : "Add to Card",
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
      btnText : "Add to Card",
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
      btnText : "Add to Card",
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
      btnText : "Add to Card",
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
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 9,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LE1001301_1.jpg",
      name : "Vicenza",
      star : "",
      price : "5,600",
      last_price : "8,000",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 10,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/GP8009001_1.jpg",
      name : "Splash",
      star : "",
      price : "3,485",
      last_price : "4,100",
      sizeName : "2 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 11,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/3-April-2023/FH0016001_1.jpg",
      name : "ALTAIR",
      star : "",
      price : "5,925",
      last_price : "7,900",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 12,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13-June-2023/lq0001001.jpeg",
      name : "SQUASEM",
      star : "",
      price : "8,900",
      last_price : "11,125",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 12,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/17jan2024/LG1012001_1.jpg",
      name : "ORION",
      star : "",
      price : "4,394",
      last_price : "7,990",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 13,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/17jan2024/LG1012001_1.jpg",
      name : "Frontec",
      star : "",
      price : "19,000",
      last_price : "23,750",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 14,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9000001_1.jpg",
      name : "LOCKATION",
      star : "",
      price : "14,400",
      last_price : "18,000",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 15,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9005001_1.jpg",
      name : "SWAG-ON GAMER BOY",
      star : "",
      price : "4,550",
      last_price : "6,500",
      sizeName : "1 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 16,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/3-July-2023/QO0111003_1.jpg",
      name : "Swag-On",
      star : "",
      price : "4,550",
      last_price : "6,500",
      sizeName : "1 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 17,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/23-June-2023/LD8001002_1.jpg",
      name : "SWAG - ON EMOJI",
      star : "",
      price : "4,690",
      last_price : "6,700",
      sizeName : "2 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 18,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04sept2023/QV1074001_1.jpg",
      name : "Capella",
      star : "",
      price : "7,275",
      last_price : "9,700",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 19,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04oct2023/SB4061001_1.jpg",
      name : "Aerostep",
      star : "",
      price : "4,895",
      last_price : "9,790",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 20,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/23-June-2023/LD8001002_1.jpg",
      name : "KUNA",
      star : "",
      price : "4,788",
      last_price : "7,600",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 21,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04sept2023/QV1074001_1.jpg",
      name : "Ellipso",
      star : "",
      price : "5,625",
      last_price : "11,250",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 22,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/04oct2023/SB4061001_1.jpg",
      name : "CRUX",
      star : "",
      price : "5,085",
      last_price : "10,170",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 23,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/28-Aug-2023/LE1001101_1.jpeg",
      name : "MAJORIS +",
      star : "",
      price : "5,415",
      last_price : "9,500",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 24,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/3-July-2023/MD8006901_1.jpg",
      name : "ROLLIO",
      star : "",
      price : "8,100",
      last_price : "13,500",
      sizeName : "2 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 25,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11oct2023/SB0009001_1.jpg",
      name : "PLAY4BLUE BLUE",
      star : "",
      price : "5,250",
      last_price : "7,500",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 26,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9000001_1.jpg",
      name : "Play4blue",
      star : "",
      price : "5,250",
      last_price : "7,500",
      sizeName : "2 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large",
    },
    },
    {
      id : 27,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29-Mar-2023/LP9005001_1.jpg",
      name : "PLAY4BLUE SPORT",
      star : "",
      price : "5,250",
      last_price : "7,500",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 28,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/QI9009002_1.jpg",
      name : "CIRCURITY",
      star : "",
      price : "5,655",
      last_price : "7,540",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 29,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11oct2023/SB0031001_1.jpg",
      name : "Play4blue",
      star : "",
      price : "5,655",
      last_price : "7,540",
      sizeName : "3 Size",
      btnText : "Add to Card",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 30,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/16jan2024/88G409005_1.jpg",
      name : "Airconic",
      star : "",
      price : "5,925",
      last_price : "7,900",
      sizeName : "3 Size",
      btnText : "Notify Me",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 31,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11oct2023/LR5000001_1.jpg",
      name : "Bloom",
      star : "",
      price : "5,985",
      last_price : "8,550",
      sizeName : "3 Size",
      btnText : "Notify Me",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 32,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/02nov2023/LR9008001_1.jpg",
      name : "Petro",
      star : "",
      price : "4,980",
      last_price : "8,300",
      sizeName : "3 Size",
      btnText : "Notify Me",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
    },
    {
      id : 33,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/29dec2023/LR7001001_1.jpg",
      name : "Pop Dot",
      star : "",
      price : "6,020",
      last_price : "8,600",
      sizeName : "3 Size",
      btnText : "Notify Me",
      size : {
        cabin : "Cabin",
        medium : "Medium",
        large : "Large"
    },
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
            <div className="bottomMain bg-body-secondary">
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
