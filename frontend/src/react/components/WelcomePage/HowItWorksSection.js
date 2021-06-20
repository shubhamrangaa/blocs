import React from "react";

//styles
import styles from "../../styles/WelcomePage.module.css";

const HowItWorksSection = () => {
  return (
    <div id="how" className={styles.container}>
      <h1>How it works?</h1>
      <p>
        Just Sign up and you’re all set. Enter your Virtual Event world to
        explore everything an event has to offer. From Mentorship to networking
      </p>
      <iframe
        // width="1920"
        // height="1080"
        src="https://www.youtube.com/embed/BG7YUK5gCMw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HowItWorksSection;
