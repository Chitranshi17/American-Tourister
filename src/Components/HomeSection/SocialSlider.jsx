import React from "react";
import Slider from "react-slick";
import SocialCard from "./SocialCard";

const SocialSlider = () => {
  const data = [
    {
      id: 1,
      video : <iframe width="560" height="315" src="https://www.youtube.com/embed/Y6Pjf7jqJgA?si=xG5wMUbl5HPjbQZd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      id: 2,
      video : <iframe width="560" height="315" src="https://www.youtube.com/embed/zgXczFRFqgg?si=LeVX_LNUVDrfnvOe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      id: 3,
      video : <iframe width="560" height="315" src="https://www.youtube.com/embed/yQAPQkP2svk?si=zTJpTcxq5L1jdy5v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      id: 4,
      video : <iframe width="560" height="315" src="https://www.youtube.com/embed/Cgkm6X-4urw?si=quoLUiGuM7Oi18MQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ,
    },
    {
      id: 5,
      video : <iframe width="560" height="315" src="https://www.youtube.com/embed/AwHmW5PSvFY?si=GWmEbMisc0ltVrp1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      id: 6,
      video : <iframe width="560" height="315" src="https://www.youtube.com/embed/b9caWFnG4rY?si=n_4E5kBwyIAv8aSr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
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
