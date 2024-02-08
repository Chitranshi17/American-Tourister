import React from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import BackPackProductCard from "../Components/PageCard/BackPackProductCard";

const BackPackPage = () => {

  const data = [
    {
      id : 1,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/HL4009008_1.jpg",
      name : "RUBIO",
      star : "",
      price : "4,320",
      last_price : "5,400",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "22.5L"
      }
  },
    {
      id : 2,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/23-June-2023/LN5011101_1.jpg",
      name : "Swiddle+",
      star : "",
      price : "1,480",
      last_price : "1,850",
      sizeName : "1 Size",
      btnText : "Add Td Card",
      size : {
        small : "12.5L",
        large : "20.5L"
      }
  },
    {
      id : 3,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LP3001301_1.jpg",
      name : "PAZZO+",
      star : "",
      price : "1,640",
      last_price : "2,050",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "28L",
    },
  },
    {
      id : 4,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LO7000101_1.jpg",
      star : "",
      price : "1,720",
      last_price : "2,150",
      sizeName : " 2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "28L",
    },
  },
    {
      id : 5,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LP0019002_1.jpg",
      name : "Aleo+",
      star : "",
      price : "1,490",
      last_price : "1,863",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "27L",
    },
  },
    {
      id : 6,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/14-April-2023/LN6059201_1.jpg",
      name : "Sest+",
      star : "",
      price : "1,680",
      last_price : "2,100",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 7,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/14-April-2023/LN7001201_1.jpg",
      name : "Quad+",
      star : "",
      price : "1,680",
      last_price : "2,100",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 8,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/LO1031001_1.jpg",
      name : "Sage+",
      star : "",
      price : "1,490",
      last_price : "1,862",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "28L",
        large : "25L",
    },
  },
    {
      id : 9,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/9-Aug-2023/AY1041006_1.jpg",
      name : "Zork2.0",
      star : "",
      price : "4,640",
      last_price : "5,800",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23L",
        large : "31L",
    },
  },
    {
      id : 10,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13sept2023/LT3041001_1.jpg",
      name : "Segno 2.0",
      star : "",
      price : "3,840",
      last_price : "4,800",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 11,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/14-April-2023/LN8005102_1.jpg",
      name : "Mia+",
      star : "",
      price : "1,760",
      last_price : "2,200",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "27L",
    },
  },
    {
      id : 12,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/26-Feb-2023/QI3011001_1.jpg",
      name : "Jit+",
      star : "",
      price : "4,640",
      last_price : "5,800",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "25L",
    },
  },
    {
      id : 13,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13sept2023/LT3008002_1.jpg",
      name : "Segno 2.0",
      star : "",
      price : "4,000",
      last_price : "5,000",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 14,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13sept2023/LT3041003_1.jpg",
      name : "Segno 2.0",
      star : "",
      price : "4,080",
      last_price : "5,100",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 15,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13sept2023/LT3009003_1.jpg",
      name : "Segno 2.0",
      star : "",
      price : "4,080",
      last_price : "5,100",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 16,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13sept2023/LT3008002_1.jpg",
      name : "SEGNO 2.0",
      star : "",
      price : "4,080",
      last_price : "5,100",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 17,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/13sept2023/LT3008002_1.jpg",
      name : "SEGNO 2.0",
      star : "",
      price : "4,000",
      last_price : "5,000",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 18,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/9-Aug-2023/AY1009007_1.jpg",
      name : "Zork2.0",
      star : "",
      price : "4,640",
      last_price : "5,800",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "20.5L",
        large : "23L",
    },
  },
    {
      id : 19,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/9-Aug-2023/AY1009007_1.jpg",
      name : "Hall",
      star : "",
      price : "2,600",
      last_price : "3,250",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "32L",
    },
  },
    {
      id : 20,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/18-April-2023/LN9001102_1.jpg",
      name : "Herd+",
      star : "",
      price : "1,960",
      last_price : "2,450",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31L",
    },
  },
    {
      id : 21,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/22-May-2023/HB3001005_1.jpg",
      name : "Pixie",
      star : "",
      price : "2,600",
      last_price : "3,250",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "21L",
    },
  },
    {
      id : 22,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/22sept2023/AY1009008_1.jpg",
      name : "Zork 2.0",
      star : "",
      price : "4,640",
      last_price : "5,800",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "21L",
    },
  },
    {
      id : 23,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/22sept2023/AY1008008_1.jpg",
      name : "Zork 2.0",
      star : "",
      price : "4,640",
      last_price : "5,800",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "21L",
    },
  },
    {
      id : 24,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/22sept2023/LU8079002_1.jpg",
      name : "SEST 2.0",
      star : "",
      price : " 1,760 ",
      last_price : "2.200",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "20.5L",
        large : "28L",
    },
  },
    {
      id : 25,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LV0001001_1.jpg",
      name : "ALEO 2.0",
      star : "",
      price : " 1,480 ",
      last_price : "1,850",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "19.8L",
    },
  },
    {
      id : 26,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LV0005002_1.jpg",
      name : "ALEO 2.0",
      star : "",
      price : "1,480",
      last_price : "1,850",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "20L",
    },
  },
    {
      id : 27,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU2014003_1.jpg",
      name : "YOODLE 2.0",
      star : "",
      price : "1,400",
      last_price : "1,750",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "10.5L",
        large : "11.5L",
    },
  },
    {
      id : 28,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU3031001_1.jpg",
      name : "Moodle 2.0",
      star : "",
      price : "2,650",
      last_price : "3,300",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "23L",
    },
  },
    {
      id : 29,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU4001001_1.jpg",
      name : "HERD 2.0",
      star : "",
      price : "2,120",
      last_price : "2,700",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "20.5L",
        large : "30.5L",
    },
  },
    {
      id : 30,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU4004002_1.jpg",
      name : "Herd 2.0",
      star : "",
      price : "2,160",
      last_price : "2,700",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "21L",
    },
  },
    {
      id : 31,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU5001002_1.jpg",
      name : "SIGMA 2.0",
      star : "",
      price : "2,400",
      last_price : "3,000",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "34L",
    },
  },
    {
      id : 32,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU5009001_1.jpg",
      name : "SIGMA 2.0",
      star : "",
      price : "2,400",
      last_price : "3,000",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "31.5L",
    },
  },
    {
      id : 33,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU7000001_1.jpg",
      name : "Mate 2.0",
      star : "",
      price : "2,000",
      last_price : "2,500",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "31.5L",
    },
  },
    {
      id : 34,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU7004002_1.jpg",
      name : "Mate 2.0",
      star : "",
      price : "2,000",
      last_price : "2,500",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "23.5L",
        large : "30.5L",
    },
  },
    {
      id : 35,
      image : "https://cdn.staticans.com/image/tr:e-sharpen-01,h-350,w-350,cm-pad_resize/data/AmericanTourister/11-July-2023/LU8001001_1.jpg",
      name : "Sest 2.0",
      star : "",
      price : "1,760",
      last_price : "2,200",
      sizeName : "2 Size",
      btnText : "Add Td Card",
      size : {
        small : "13.5L",
        large : "27L",
    },
  },
  ]

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
              {
                data.map(data => <BackPackProductCard  key={data.id} data={data}/>)
              }
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackPackPage ;
