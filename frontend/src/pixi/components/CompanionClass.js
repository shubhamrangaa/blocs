import * as PIXI from "pixi.js";
import * as gameState from "../game-state.json";

class Companion extends PIXI.Sprite {
	constructor(id, username, color, x, y, gameStateService) {
		super();
		// const { nickname } = gameStateService.companions[this.id];
		let nickname = "d1vshar";
		this.label = new CompanionLabel(nickname, x, y);
		this.avatar = new CompanionAvatar(id, color, x, y, this.setLabelLocation, gameStateService);
		this.addChild(this.avatar);
		this.addChild(this.label);
	}

	setLabelLocation = (x, y) => {
		this.label.setLocation(x - this.label.width / 2, y + this.label.height);
	};
}

// gameStateService

class CompanionAvatar extends PIXI.Graphics {
	constructor(id, color, x, y, getPosition, gameStateService) {
		super();

		this.id = id;
		this.gameStateService = gameStateService;

		this.speed = 3;
		this.radius = 16;
		this.dX = 0;
		this.dY = 0;
		this.getPosition = getPosition;

		this.clear();
		this.lineStyle(0);
		this.beginFill(color, 1);
		this.drawCircle(0, 0, this.radius);
		this.endFill();
		this.position.set(x, y);

		this.draw(this);
	}

	draw = () => {
		requestAnimationFrame(this.draw);
		// let X = gameState.controls.pointerX - this.position.x;
		// let Y = gameState.controls.pointerY - this.position.y;
		// let D = Math.sqrt(Math.pow(Y, 2) + Math.pow(X, 2));

		// this.dX = (this.speed * X) / D;
		// this.dY = (this.speed * Y) / D;

		const { x, y } = this.gameStateService.companions[this.id];
		this.position.set(x, y);
		this.update();
	};
	update = () => {
		this.getPosition(this.position.x, this.position.y);
	};
}

class CompanionLabel extends PIXI.Text {
	constructor(username, x, y) {
		super();

		this.text = username;
		this.style = {
			fontSize: 14,
			fontWeight: 400,
			fill: "#000",
			stroke: "#fff",
			strokeThickness: 1,
		};
		this.position.set(x - this.width / 2, y + this.height);
	}

	setLocation = (x, y) => {
		this.position.set(x, y);
	};
}

export default Companion;
