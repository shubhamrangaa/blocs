import * as gameState from "../game-state.json";
import Companion from "../components/CompanionClass.js";

const updateCompanions = (mirror) => {
	const aliveArray = gameState.companionsData;
	const onstageArray = mirror.children;

	for (let i = 0; i < aliveArray.length; i++) {
		const alive = aliveArray[i];
		let contains = false;
		for (let j = 0; j < onstageArray.length; j++) {
			const onstage = onstageArray[j];
			if (onstage.avatar.id === alive.id) {
				contains = true;
				onstage.avatar.position.set(alive.x, alive.y);
			}
		}
		if (!contains) mirror.addChild(new Companion(alive.id, alive.username, 0xffff00, alive.x, alive.y));
	}

	for (let j = 0; j < onstageArray.length; j++) {
		const onstage = onstageArray[j];
		let contains = false;
		for (let i = 0; i < aliveArray.length; i++) {
			const alive = aliveArray[i];
			if (onstage.avatar.id === alive.id) contains = true;
		}
		if (!contains) mirror.removeChild(onstage);
	}
};

export { updateCompanions };
