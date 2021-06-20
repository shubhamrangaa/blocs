import React from "react";

import styles from "../styles/Card.module.css";

const Card = ({ index, title, content }) => {
  return (
    <div className={styles.card}>
      <p>{index}</p>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
