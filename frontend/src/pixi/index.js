import * as PIXI from "pixi.js";
import Player from "./components/PlayerClass";
import MapManager from "./MapManager";
import layers from "./layers";
import { init as pointerInit } from "./controllers/pointer";
import { init as keyboardInit } from "./controllers/keyboard";

const PixiApp = new PIXI.Application({
	width: 48 * 22,
	height: 48 * 18,
	backgroundColor: 0xffffff,
});

pointerInit();
keyboardInit();

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const world = new PIXI.Container();

world.width = 48 * 22;
world.height = 48 * 18;

const setup = () => {
	PixiApp.stage.addChild(world);

	console.log(PIXI.Loader.shared.resources);
	let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;

	const sprites = new MapManager(22, 18, 48, sheet, layers).sprites;

	sprites.forEach((sprite) => {
		world.addChild(sprite);
	});

	const player1 = new Player("player1", 0xff0000, 50, 50);
	world.addChild(player1);

	console.log(world);
};

PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);

const render = () => {
	requestAnimationFrame(render);
	PixiApp.render(world);
};
render();

export default PixiApp;
