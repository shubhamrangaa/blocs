import React from "react";

//components
import Card from "../Card";

//styles
import styles from "../../styles/WelcomePage.module.css";

//content
import WhyCardContent from "../../content/WhyCardContent";

const WhyBlocsSection = () => {
  return (
    <div id="why" className={styles.container}>
      <h1>Why Blocs?</h1>
      <p>
        Online meetings are just too boring ... do we even need to state any
        other reason? So, we made [insert product name here] to gamify the
        online meeting scene, be it an online event, an official discussion we
        cover it all. :)
      </p>
      <div className={styles.cardContainer}>
        {WhyCardContent.map((card, index) => {
          return (
            <Card index={index} title={card.title} content={card.content} />
          );
        })}
      </div>
    </div>
  );
};

export default WhyBlocsSection;
