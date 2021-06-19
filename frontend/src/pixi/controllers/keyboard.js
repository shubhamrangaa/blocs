import gameState from "../game-state.json";

const init = () => {
	document.body.onkeydown = (event) => {
		gameState.controls.left = event.keyCode === 37;
		gameState.controls.up = event.keyCode === 38;
		gameState.controls.right = event.keyCode === 39;
		gameState.controls.down = event.keyCode === 40;
	};
	document.body.onkeyup = (event) => {
		gameState.controls.left = !event.keyCode === 37;
		gameState.controls.up = !event.keyCode === 38;
		gameState.controls.right = !event.keyCode === 39;
		gameState.controls.down = !event.keyCode === 40;
	};
};

export { init };
