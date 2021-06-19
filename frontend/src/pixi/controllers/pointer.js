import gameState from "../game-state.json";

const init = () => {
	document.body.onpointermove = (event) => {
		let canvas = document.getElementsByTagName("canvas")[0];
		let offsetLeft = 0;
		let offsetTop = 0;
		if (canvas) {
			offsetLeft = canvas.offsetLeft;
			offsetTop = canvas.offsetTop;
		}
		gameState.controls.pointerX = event.pageX - offsetLeft;
		gameState.controls.pointerY = event.pageY - offsetTop;
	};
};

export { init };
