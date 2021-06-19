import * as PIXI from "pixi.js";
import * as gameState from "../game-state.json";

class Player extends PIXI.Sprite {
	constructor(username, color, x, y, gameStateService) {
		super();
		this.label = new Label(username, x, y);
		this.avatar = new Avatar(color, x, y, this.setLabelLocation, gameStateService);
		this.addChild(this.avatar);
		this.addChild(this.label);
		this.zIndex = 99;
	}

	setLabelLocation = (x, y) => {
		this.label.setLocation(x - this.label.width / 2, y + this.label.height);
	};
}

class Avatar extends PIXI.Graphics {
	constructor(color, x, y, getPosition, gameStateService) {
		super();
		this.gameStateService = gameStateService;
		this.interactive = true;

		this.pointerDown = false;
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

		this.on("pointerdown", () => {
			this.pointerDown = true;
		});
		this.on("pointerupoutside", () => {
			this.pointerDown = false;
		});
		this.on("pointerup", () => {
			this.pointerDown = false;
		});

		this.draw(this);
	}

	draw = () => {
		requestAnimationFrame(this.draw);
		if (this.pointerDragging() && this.pointerDown) {
			let X = gameState.controls.pointerX - this.position.x;
			let Y = gameState.controls.pointerY - this.position.y;
			let D = Math.sqrt(Math.pow(Y, 2) + Math.pow(X, 2));

			this.dX = (this.speed * X) / D;
			this.dY = (this.speed * Y) / D;

			this.position.set(this.position.x + this.dX, this.position.y + this.dY);
			this.update();
		}
		if (gameState.controls.up) {
			this.position.set(this.position.x, this.position.y - this.speed);
			this.update();
		}
		if (gameState.controls.down) {
			this.position.set(this.position.x, this.position.y + this.speed);
			this.update();
		}
		if (gameState.controls.right) {
			this.position.set(this.position.x + this.speed, this.position.y);
			this.update();
		}
		if (gameState.controls.left) {
			this.position.set(this.position.x - this.speed, this.position.y);
			this.update();
		}
	};
	update = () => {
		this.gameStateService.player = {
			...this.gameStateService.player,
			x: this.position.x,
			y: this.position.y,
		};
		this.getPosition(this.position.x, this.position.y);
	};
	pointerDragging = () =>
		gameState.controls.pointerX > this.position.x + this.width / 2 - this.radius / 2 ||
		gameState.controls.pointerX < this.position.x - this.width / 2 + this.radius / 2 ||
		gameState.controls.pointerY > this.position.y + this.radius / 2 ||
		gameState.controls.pointerY < this.position.y - this.radius / 2;
}

class Label extends PIXI.Text {
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

export default Player;
