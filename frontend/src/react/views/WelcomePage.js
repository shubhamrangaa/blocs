import React from "react";
import StartButton from "../components/StartButton";
import {
  Navbar,
  HeroSection,
  AboutUsSection,
  HowItWorksSection,
  WhyBlocsSection,
} from "../components/WelcomePage";
const WelcomePage = () => {
  return (
    <div id="container">
      <div id="pixi-root"></div>
      <div>
        <Navbar />
        <HeroSection />
        <WhyBlocsSection />
        <HowItWorksSection />
        <AboutUsSection />
      </div>
    </div>
  );
};

export default WelcomePage;
