import * as PIXI from "pixi.js";

import MapManager from "./MapManager";
import layers from "./layers";

import { collideProps, updateCharacterState } from "./utils/playerController";
import { updateCompanions } from "./utils/companionController";

import { init as pointerInit } from "./controllers/pointer";
import { init as keyboardInit } from "./controllers/keyboard";

import NetworkService from "./services/NetworkService";
import AgoraService from "./services/AgoraService";

import Player from "./components/PlayerClass";
import Companion from "./components/CompanionClass.js";

import * as gameState from "./game-state.json";

const PixiApp = new PIXI.Application({
	width: 48 * 22,
	height: 48 * 18,
	backgroundColor: null,
});

pointerInit();
keyboardInit();

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const world = new PIXI.Container();
const mirror = new PIXI.Container();

world.width = 48 * 22;
world.height = 48 * 18;
world.sortableChildren = true;
world.position.set(24, 24);

mirror.width = 48 * 22;
mirror.height = 48 * 18;

new AgoraService();
const networkService = new NetworkService("http://127.0.0.1:5000");

networkService.init().then(() => {
	networkService.poschange();
	setInterval(networkService.poschange.bind(networkService), 500);
	const player1 = new Player(0xff0000, "nickname", 150, 150);

	let solids = [];

	const setup = () => {
		PixiApp.stage.addChild(world);

		let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;

		const Map = new MapManager(22, 18, 48, sheet, layers);
		const sprites = Map.sprites;
		solids = Map.solids;
		sprites.forEach((sprite) => {
			world.addChild(sprite);
		});

		world.addChild(mirror);
		world.addChild(player1);
	};

	PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);

	// rendering loop
	const render = () => {
		requestAnimationFrame(render);
		collideProps(player1.avatar, solids);
		updateCompanions(mirror);
		updateCharacterState(player1.avatar);
		PixiApp.render(world);
	};
	render();
});

export default PixiApp;
