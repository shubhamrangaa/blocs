import * as PIXI from "pixi.js";
import Bump from "bump.js";

const b = new Bump(PIXI);

const collideProps = (player, props) => {
	for (let i = 0; i < props.length; i++) {
		if (props[i].isRound) b.circleCollision(player, props[i]);
		else b.circleRectangleCollision(player, props[i]);
	}
};

export { collideProps };
