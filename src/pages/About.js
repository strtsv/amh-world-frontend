import React from "react";

import Header from "../components/Header";
import MainMenuArea from "../components/MainMenuArea";
import MobileMenu from "../components/MobileMenu";
import Breatcome from "../components/About/Breatcome";
import TabArea from "../components/TabArea";
import CounterArea from "../components/About/CounterArea";
import Video from "../components/About/Video";
import Colto from "../components/Colto";
import PricingArea from "../components/About/PricingArea";
import BlogArea from "../components/BlogArea";
import FooterMiddle from "../components/FooterMiddle";
import FooterBottom from "../components/FooterBottom";

const About = () => {
  return ( 
    <>
    <Header />
    <MainMenuArea />
    <MobileMenu />
    <Breatcome />
    <TabArea />
    <CounterArea />
    <Video />
    <Colto />
    <PricingArea />
    <BlogArea />
    <FooterMiddle />
    <FooterBottom />
    </>
  );
}

export default About;

