import React, { useState } from "react";
import PixiApp from "../../pixi/";

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
			<button onClick={!canvasLoaded ? loadCanvas : unloadCanvas}>{!canvasLoaded ? "Open Server" : "Close Server"}</button>
		</div>
	);
};

export default StartButton;
