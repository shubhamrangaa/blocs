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
          Magna nulla sit duis et ea reprehenderit voluptate enim sit qui duis
          laboris. Nulla eu adipisicing reprehenderit sunt non. Esse ipsum
          cupidatat tempor adipisicing ut ad commodo non in amet ea labore
          commodo. Ex et proident dolor irure reprehenderit reprehenderit esse.
          Cupidatat mollit velit nostrud sint exercitation fugiat fugiat ut
          officia.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
