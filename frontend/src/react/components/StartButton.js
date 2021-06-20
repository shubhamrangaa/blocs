import React, { useState } from "react";
import PixiApp from "../../pixi/";

// sign in
import firebase from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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

  const buttonHandler = () => {
    if (!canvasLoaded) {
      loadCanvas();
    } else {
      unloadCanvas();
    }
  };

  return (
    <div>
      <button className={styles.enterGameButton} onClick={buttonHandler}>
        {!canvasLoaded ? "Enter Space" : "End Space"}
      </button>
    </div>
  );
};

export default StartButton;
