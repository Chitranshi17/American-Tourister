import React from "react";
import Slider from "react-slick";
import SocialCard from "./SocialCard";

const SocialSlider = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <Slider {...settings} className="socialSliderSec">
        {data.map((data) => (
          <SocialCard key={data.id} data={data} />
        ))}
      </Slider>
    </>
  );
};

export default SocialSlider;
