import * as PIXI from "pixi.js";
import getAppearanceForId from "./AssetMap";

export default class MapManager {
	constructor(width, height, blockSize, sheet, layers) {
		this.width = width;
		this.height = height;
		this.blockSize = blockSize;
		this.sheet = sheet;
		this.layers = layers;
		this.sprites = [];
		this.solids = [];

		this.init();
	}

	init() {
		// console.log(this.layers);
		// this.drawLayer(this.layers[0]);
		this.layers.forEach((layer, index) => {
			this.drawLayer(layer, index);
		});
	}

	drawLayer(layer, index) {
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				const id = layer[this.width * i + j];

				const appearance = getAppearanceForId(id);

				if (appearance === null) continue;
				const { sprite, isRound } = appearance;
				const block = new PIXI.Sprite(this.sheet.textures[sprite]);
				block.width = this.blockSize;
				block.height = this.blockSize;
				block.pivot.set(block.width / 2, block.height / 2);
				block.isRound = isRound;
				block.radius = this.blockSize / 2;

				const { x, y } = MapManager.getCoordsFromIndex(this.blockSize, i, j);

				block.x = x;
				block.y = y;

				this.sprites.push(block);
				if (index === 1) this.solids.push(block);

				console.log(x, y, id, sprite);
			}
		}
	}

	static getCoordsFromIndex(gridSize, i, j) {
		return { x: j * gridSize, y: i * gridSize };
	}
}
