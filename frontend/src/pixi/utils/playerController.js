import * as PIXI from "pixi.js";
import Bump from "bump.js";

import * as gameState from "../game-state.json";

const b = new Bump(PIXI);

const collideProps = (player, props) => {
	for (let i = 0; i < props.length; i++) {
		if (props[i].isRound) b.circleCollision(player, props[i]);
		else b.circleRectangleCollision(player, props[i]);
	}
};

const updateCharacterState = (player) => {
	// gameState.x = player.getBounds().x;
	// gameState.y = player.getBounds().y;
	gameState.x = player.position.x;
	gameState.y = player.position.y;
	// console.log(gameState);
};

export { collideProps, updateCharacterState };
