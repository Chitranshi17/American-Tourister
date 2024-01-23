import React from "react";
import BannerCard from "./BannerCard";

const Banner2 = () => {
  const data = {
    image:
      "https://www.americantourister.com.au/on/demandware.static/-/Library-Sites-AmericanTouristerSharedLibrary/default/dwfe73ab7d/images/homepage/promotion/3_homepage-tiles_desktop2904.png",
    heading: "Here For You",
    content:
      "Discover answers for our most frequently asked questions plus how to deal with any issue you might encounter.",
    btnContent: "Let Us Help",
  };

  return (
    <>
      <BannerCard data={data} />
    </>
  );
};

export default Banner2;
