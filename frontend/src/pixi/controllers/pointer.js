import gameState from "../game-state.json";

const init = () => {
	document.body.onpointermove = (event) => {
		gameState.controls.pointerX = event.pageX;
		gameState.controls.pointerY = event.pageY;
	};
};

export { init };
