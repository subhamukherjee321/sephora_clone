import React from "react";
import SubscribeBar from "../Components/Footer/SubscribeBar";
import LogoBar from "../Components/Header/LogoBar";
import Navbar from "../Components/Header/Navbar";
import NavbarResponsive from "../Components/Header/NavbarResponsive";
import TopBar from "../Components/Header/TopBar";
import Slider from "../Components/Body/Slider";
import HottestProductHeading from "../Components/Body/HottestProductHeading";
import ProductBanners from "../Components/Body/ProductBanners";
import BackToTopButton from "../Components/Body/BackToTopButton";

const Home = () => {

  return (
    <div>
      <TopBar />
      <LogoBar />
      <NavbarResponsive />
      <Navbar />
      <Slider />
      <HottestProductHeading />
      <ProductBanners />
      <BackToTopButton/>
      <SubscribeBar />
    </div>
  );
};

export default Home;
