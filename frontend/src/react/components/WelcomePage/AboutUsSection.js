import React from "react";

//components
import DeveloperCard from "./DeveloperCard";

//styles
import styles from "../../styles/WelcomePage.module.css";

//content
import DeveloperContent from "../../content/AboutUsContent";

const AboutUsSection = () => {
  return (
    <div id="about" className={styles.container}>
      <h1>About Us</h1>
      <div className={styles.aboutUsLayoutGrid}>
        <div className={styles.developerGrid}>
          {DeveloperContent.map((developer) => {
            return (
              <DeveloperCard name={developer.name} links={developer.links} />
            );
          })}
        </div>
        <p>
          We're engineering students at Manipal University Jaipur from 4 different corner of the country. 
          This project was built for Hack Club NMIT's Hackbout 2.0.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
