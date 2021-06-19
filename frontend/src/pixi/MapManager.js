import * as PIXI from "pixi.js";
import getAppearanceForId from "./AssetMap";

export default class MapManager {
	constructor(width, height, blockSize, sheet, layers) {
		this.width = width;
		this.height = height;
		this.blockSize = blockSize;
		this.sheet = sheet;
		this.layers = layers;
		this.regions = [];
		this.sprites = [];
		this.solids = [];

		this.init();
	}

	init() {
		// console.log(this.layers);
		// this.drawLayer(this.layers[0]);
		this.drawLayer(this.layers[0], 0);
		this.initRegions(this.layers[3]);
		this.drawLayer(this.layers[1], 1);
		this.drawLayer(this.layers[2], 2);
		// for (let i = 0; i < 3; i++) {
		// 	this.drawLayer(this.layers[i], i);
		// }

		// this.initRegions(this.layers[3]);
	}

	initRegions(regionLayer) {
		const sprite = new PIXI.Sprite();

		const regionNames = ['piano', 'kichten1', 'kitchen2', 'meetup', 'conference', 'table1', 'table2', 'table3', 'table4'];
		for (let i = -2; i > -11; i--) {
			this.regions.push(new Region(i, regionNames[(-1* i) - 2], sprite));
		}

		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				const id = regionLayer[this.width * i + j];
				if (id < -1) {
					const { x, y } = MapManager.getCoordsFromIndex(this.blockSize, i, j);
				
					const regionGrid = new PIXI.Graphics();
					regionGrid.beginFill(0xFFFFFF, 0.2);
					// regionGrid.lineStyle(5, 0xFF0000);
					regionGrid.drawRect(0, 0, 300, 200);
					regionGrid.x = x;
					regionGrid.y = y;
					regionGrid.width = this.blockSize;
					regionGrid.height = this.blockSize;
					regionGrid.pivot.set(regionGrid.width / 2, regionGrid.height / 2);
					sprite.addChild(regionGrid);
					this.regions[(-1* id) - 2].blocks.push(regionGrid);
				}
			}
		}
		this.sprites.push(sprite);
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
			}
		}
	}

	static getCoordsFromIndex(gridSize, i, j) {
		return { x: j * gridSize, y: i * gridSize };
	}
}

class Region {
	constructor(id, name, sprite) {
		this.id = id;
		this.name = name;
		this.sprite = sprite;
		this.blocks = [];
	}
}