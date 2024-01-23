import React from "react";
import ShopProductCard from "./ShopProductCard";
import Slider from "react-slick";

const ShopProduct = () => {
  const data = [
    {
      id: 1,
      title: "Fornax",
      price: 9375,
      last_price: 12500,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04jan2024/LL8000003_1.jpg",
    },
    {
      id: 2,
      title: "Fornax",
      price: 8100,
      last_price: 10800,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04jan2024/LL8000002_1.jpg",
    },
    {
      id: 3,
      title: "Fornax",
      price: 6713,
      last_price: 8950,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04jan2024/LL8000001_1.jpg",
    },
    {
      id: 4,
      title: "Fornax",
      price: 8550,
      last_price: 11400,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/11oct2023/SB0031003_1.jpg",
    },
    {
      id: 5,
      title: "Fornax",
      price: 8550,
      last_price: 11400,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/11oct2023/SB0028003_1.jpg",
    },
    {
      id: 6,
      title: "Fornax",
      price: 8550,
      last_price: 11400,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/11oct2023/SB0009003_1.jpg",
    },
    {
      id: 7,
      title: "Fornax",
      price: 7050,
      last_price: 9400,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04oct2023/SB4005202_1.jpg",
    },
    {
      id: 8,
      title: "Fornax",
      price: 5625,
      last_price: 7500,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04oct2023/SB4087101_1.jpg",
    },
    {
      id: 9,
      title: "Fornax",
      price: 7050,
      last_price: 9400,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04oct2023/SB4061002_1.jpg",
    },
    {
      id: 10,
      title: "Fornax",
      price: 11175,
      last_price: 18625,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04sept2023/QV1079002_1.jpg",
    },
    {
      id: 11,
      title: "Fornax",
      price: 8100,
      last_price: 13500,
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/AmericanTourister/04sept2023/QV1079001_1.jpg",
    },
  ];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className="shopProduct "> */}
      <div className="topShopProduct">
        <div className="shopProductHeading">
          <div className="shopHeadingColor">
            <h2>Shop products</h2>
          </div>
          <div className="shopHeading"></div>
        </div>
        <div className="shopProductButton">
          <div className="shopHeadingButton">
            <button className="shopBtn active">Most popular</button>
            <button className="shopBtn">What's new</button>
            <button className="shopBtn">Bestseller</button>
          </div>
        </div>
      </div>

      <div className="bottomShopProduct ">
        <div className="bottomSProducts">
          {/* Card Design */}
          <Slider {...settings} className="shopCardContainer">
            {data.map((data) => (
              <ShopProductCard key={data.id} data={data} />
            ))}
          </Slider>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default ShopProduct;
