import React, { useState } from "react";

const StartButton = () => {
	const [canvasLoaded, setCanvasLoaded] = useState(false);

	const loadCanvas = () => {
		setCanvasLoaded(true);
	};

	const unloadCanvas = () => {
		setCanvasLoaded(false);
	};

	return (
		<div>
			<button onClick={!canvasLoaded ? loadCanvas : unloadCanvas}>{!canvasLoaded ? "Open Server" : "Close Server"}</button>
		</div>
	);
};

export default StartButton;
