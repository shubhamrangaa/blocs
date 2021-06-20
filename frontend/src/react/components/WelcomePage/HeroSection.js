import React from "react";

//components
import StartButton from "../StartButton";

//styles
import styles from "../../styles/WelcomePage.module.css";
import { stars, stars2, stars3 } from "../../styles/StarBackground.module.css";
import EarthBg from "../../images/EARTH.png";

const HeroSection = () => {
  return (
    <div id="hero" className={styles.containerHero}>
      <div id={stars}></div>
      <div id={stars2}></div>
      <div id={stars3}></div>
      <h1>Blocs - Virtual Spaces</h1>
      <p>
        Redefining virtual events.
        <br />
        A 2D virtual environment for hosting events and classroom activities. Gamify your virtual activities.
      </p>
      <div className={styles.callToAction}>
        <StartButton />
      </div>
      <img src={EarthBg} alt=""></img>
    </div>
  );
};

export default HeroSection;
