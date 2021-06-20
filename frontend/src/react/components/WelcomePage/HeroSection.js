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
        Duis dolor aliquip anim adipisicing qui sunt sit exercitation
        reprehenderit elit incididunt. Irure voluptate eiusmod in duis officia
        minim excepteur occaecat est laboris do labore cupidatat. Irure ea amet
        aliquip non enim ullamco eiusmod officia.
      </p>
      <div className={styles.callToAction}>
        <StartButton />
      </div>
      <img src={EarthBg} alt=""></img>
    </div>
  );
};

export default HeroSection;
