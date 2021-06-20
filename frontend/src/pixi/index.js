import * as PIXI from "pixi.js";

import Player from "./components/PlayerClass";
import MapManager from "./MapManager";
import layers from "./layers";

import { collideProps } from "./utils/collision";

import { init as pointerInit } from "./controllers/pointer";
import { init as keyboardInit } from "./controllers/keyboard";
import GameStateService from "./services/GameStateService";
import NetworkService from "./services/NetworkService";
import Companion from "./components/CompanionClass";
import AgoraService from "./services/AgoraService";

const gameStateService = new GameStateService();

const PixiApp = new PIXI.Application({
	width: 48 * 22,
	height: 48 * 18,
	backgroundColor: null,
});

pointerInit();
keyboardInit();

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const world = new PIXI.Container();

world.width = 48 * 22;
world.height = 48 * 18;
world.sortableChildren = true;
world.position.set(24, 24);

gameStateService.player = {
	id: null,
	nickname: "d1vshar",
	x: 150,
	y: 150,
};

// new AgoraService();
const networkService = new NetworkService('http://127.0.0.1:5000', gameStateService)

networkService.init().then(() => {
	networkService.poschange();
	setInterval(networkService.poschange.bind(networkService), 500);
	const player1 = new Player(0xff0000, gameStateService);

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

		world.addChild(player1);
	};

	PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);

	const updateCompanionState = () => {
		console.log("gamestate", gameStateService);
		Object.keys(gameStateService.companions).forEach((key) => {
			console.log(gameStateService.companions[key]);
			let companion = gameStateService.companions[key];
			world.addChild(new Companion(key, companion.nickname, 0x00ff00, companion.x, companion.y, gameStateService));
		});
	};

	updateCompanionState();
	setInterval(updateCompanionState, 2000);

	// animation loop
	const render = () => {
		requestAnimationFrame(render);
		collideProps(player1.avatar, solids);
		PixiApp.render(world);
	};
	render();
});


export default PixiApp;
