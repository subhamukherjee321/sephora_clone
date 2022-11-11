import React from "react";
import Slider from "react-slick";
import Body from "../Components/Body/Body";
import SubscribeBar from "../Components/Footer/SubscribeBar";
import LogoBar from "../Components/Header/LogoBar";
import Navbar from "../Components/Header/Navbar";
import NavbarResponsive from "../Components/Header/NavbarResponsive";
import TopBar from "../Components/Header/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <LogoBar />
      <NavbarResponsive />
      <Navbar />
      {/* <Slider /> */}
      {/* <Body />
      <SubscribeBar /> */}
    </div>
  );
};

export default Home;
