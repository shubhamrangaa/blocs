import * as PIXI from "pixi.js";
import Player from "./components/PlayerClass";

import gameState from "./game-state.json";

import { init as pointerInit } from "./controllers/pointer";
import { init as keyboardInit } from "./controllers/keyboard";

const PixiApp = new PIXI.Application({
	width: window.innerWidth * 0.75,
	height: window.innerHeight,
	backgroundColor: 0x1099bb,
});

pointerInit();
keyboardInit();

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const world = new PIXI.Container();
PixiApp.stage.addChild(world);

const player1 = new Player("player1", 0xff0000, 50, 50);
world.addChild(player1);

const render = () => {
	requestAnimationFrame(render);
	PixiApp.render(world);
};
render();

export default PixiApp;
