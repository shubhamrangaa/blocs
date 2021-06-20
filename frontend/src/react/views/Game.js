import React, { useEffect } from "react";
import ChatSection from "../components/GamePage/ChatSection";

import { layout, controller } from "../styles/Layout.module.css";
import PixiApp from "../../pixi";
export const Game = () => {

  const loadCanvas = () => {
    let PixiRoot = document.getElementById("pixi-root");
    PixiRoot.appendChild(PixiApp.view);
  };

  useEffect(() => {
    loadCanvas();
  }, []);

  return (
    <div className={layout}>
      <div id="container">
        <div id="pixi-root"></div>
      </div>
      <div className={controller}>
        {/* <h1 style={{ hidden: `${show}` }}>Game Page</h1> */}
        <ChatSection />
      </div>
    </div>
  );
};

// export default Game;
