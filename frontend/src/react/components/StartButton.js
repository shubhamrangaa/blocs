import React, { useState } from "react";
import PixiApp from "../../pixi/";
import styles from "../styles/Game.module.css";
const StartButton = () => {
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  const loadCanvas = () => {
    let PixiRoot = document.getElementById("pixi-root");
    PixiRoot.appendChild(PixiApp.view);
    setCanvasLoaded(true);
  };

  const unloadCanvas = () => {
    let Canvas = document.getElementsByTagName("canvas");
    let PixiRoot = document.getElementById("pixi-root");
    PixiRoot.removeChild(Canvas[0]);
    setCanvasLoaded(false);
  };

  return (
    <div>
      <button
        className={styles.enterGameButton}
        onClick={!canvasLoaded ? loadCanvas : unloadCanvas}
      >
        {!canvasLoaded ? "Enter Space" : "End Space"}
      </button>
    </div>
  );
};

export default StartButton;
