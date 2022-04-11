import React from "react";

import Header from "../components/Header";
import MainMenuArea from "../components/MainMenuArea";
import MobileMenu from "../components/MobileMenu";
import Breatcome from "../components/Portfolio/Breatcome";
import PortfolioArea from "../components/Portfolio/PortfolioArea";
import FooterMiddle from "../components/FooterMiddle";
import FooterBottom from "../components/FooterBottom";

const Portfolio = () => {
  return ( 
    <>
    <Header />
    <MainMenuArea />
    <MobileMenu />
    <Breatcome />
    <PortfolioArea />
    <FooterMiddle />
    <FooterBottom />
    </>
  );
}

export default Portfolio;

