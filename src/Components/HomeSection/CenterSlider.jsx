import React from "react";
import Slider from "react-slick";
import centerSlide1 from "../../assets/centerSlide1.webp";
import CenterSliderCard from "./CenterSliderCard";
import SocialSlider from "./SocialSlider";

const CenterSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/travel-buddy.jpg",
    },
    {
      id: 2,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/solo-travel.jpg",
    },
    {
      id: 3,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial-wheres-the-fun-at.jpg",
    },
    {
      id: 4,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial-ready-set.jpg",
    },
    {
      id: 5,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial-events-worth-travelling.jpg",
    },
    {
      id: 6,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/tile_editorial_wotson_2.jpg",
    },
    {
      id: 7,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/AT_HP_Editorial_Banner_Instagram.jpg",
    },
    {
      id: 8,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/tile_editorial_front_page_2.jpg",
    },
    {
      id: 9,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial_banner4.jpg",
    },
    {
      id: 10,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial_banner1.jpg",
    },
    {
      id: 11,
      image:
        "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial_banner2.jpg",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <div className="centerSlider d-flex align-items-center justify-content-center">
        <Slider
          {...settings}
          className="centerSliderSec d-flex align-items-center justify-content-center"
        >
          {data.map((data) => (
            <CenterSliderCard key={data.id} data={data} />
          ))}
        </Slider>
        <div className="centerSlideSkew"></div>
      </div>

      <div className="socialSection">
        <div className="socialContent">
          <div className="leftSocialContent">
            <h3>Stay Social!</h3>
            <h6>#AMERICANTOURISTER</h6>
            <div className="line"></div>
          </div>
          <div className="rightSocialContent">
            <div className="rightSocialText">
              <span>
                <h4>Follo us on :</h4>
                <div className="socialIcon"></div>
                <div className="socialIcon"></div>
              </span>
            </div>
          </div>
        </div>
        <div className="socialSlider">
          <SocialSlider />
        </div>
      </div>
    </>
  );
};

export default CenterSlider;
