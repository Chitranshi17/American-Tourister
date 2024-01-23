import React from "react";
import HeroCarousel from "../Components/HomeSection/HeroCarousel";
import ShopProduct from "../Components/HomeSection/ShopProduct";
import Banner from "../Components/HomeSection/Banner";
import SlideShow from "../Components/HomeSection/SlideShow";
import Banner2 from "../Components/HomeSection/Banner2";
import CenterSlider from "../Components/HomeSection/CenterSlider";
import SlideTrust from "../Components/HomeSection/SlideTrust";
import SlideBanner from "../Components/HomeSection/SlideBanner";
import Footer from "../Components/FooterComponents/Footer";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ShopProduct />
      <Banner />
      <SlideShow />
      <Banner2 />
      <CenterSlider />
      <SlideTrust />
      <SlideBanner />
      <Footer/>
    </>
  );
};

export default Home;
