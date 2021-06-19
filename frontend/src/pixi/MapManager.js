import * as PIXI from "pixi.js";
import getSpriteForId from "./AssetMap";

export default class MapManager {
	constructor(width, height, blockSize, sheet, layers) {
		this.width = width;
		this.height = height;
		this.blockSize = blockSize;
		this.sheet = sheet;
		this.layers = layers;
		this.sprites = [];

		this.init();
	}

	init() {
		console.log(this.layers);
		this.layers.forEach((layer) => {
			this.drawLayer(layer);
		});
	}

	drawLayer(layer) {
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				const id = layer[this.width * i + j];
				const spriteName = getSpriteForId(id);
				if (spriteName === null) continue;
				const block = new PIXI.Sprite(this.sheet.textures[spriteName]);
				block.width = this.blockSize;
				block.height = this.blockSize;

				const { x, y } = MapManager.getCoordsFromIndex(this.blockSize, i, j);

				block.x = x;
				block.y = y;

				this.sprites.push(block);

				console.log(x, y, id, spriteName);
			}
		}
	}

	static getCoordsFromIndex(gridSize, i, j) {
		return { x: j * gridSize, y: i * gridSize };
	}
}
