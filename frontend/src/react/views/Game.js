import React from "react";
import StartButton from "../components/StartButton";
import styles from "../styles/Game.module.css";
export const Game = () => {
  return (
    <div id="container">
      <div id="pixi-root"></div>
      <section className={styles.signupContainer}>
        <h1>Game Page</h1>
        <StartButton />
      </section>
    </div>
  );
};

// export default Game;
