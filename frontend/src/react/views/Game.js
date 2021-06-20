import React, { useState } from "react";
import StartButton from "../components/StartButton";
import styles from "../styles/Game.module.css";

import { layout, controller } from "../styles/Layout.module.css";
export const Game = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={layout}>
      <div id="container">
        <div id="pixi-root"></div>
      </div>
      <div className={controller}>
        {/* <h1 style={{ hidden: `${show}` }}>Game Page</h1> */}
        <StartButton />
      </div>
    </div>
  );
};

// export default Game;
