import { io } from "socket.io-client";
import * as gameState from "../game-state.json";

export default class NetworkService {
	constructor(url) {
		this.socket = io(url, { reconnection: false });

		this.socket.on("connect", () => console.log("Connected to server!"));

		// this will only be received after init is called.
		this.socket.on("stateupdate", (newGameState) => {
			console.log(newGameState);
			delete newGameState[this.socket.id];
			let companionsObj = newGameState;
			let companionsArray = [];
			Object.keys(companionsObj).forEach((id) => {
				companionsArray.push({ id, username: companionsObj[id].nickname, x: companionsObj[id].x, y: companionsObj[id].y });
			});
			console.log(companionsArray);
			gameState.companionsData = companionsArray;
		});
	}

	async init() {
		let registerData = { nickname: gameState.username, x: gameState.x, y: gameState.y };
		this.socket.emit("register", registerData);

		return new Promise((resolve, reject) => {
			this.socket.on("init", (initialGameState) => {
				if (!initialGameState) reject();

				delete initialGameState[this.socket.id];
				gameState.id = this.socket.id;
				gameState.companionsData = this.formCompanionData(initialGameState);
				resolve();
			});
		});
	}

	poschange() {
		// console.log("service", this.gameStateService.player);
		this.socket.emit("poschange", gameState.x, gameState.y);
	}

	formCompanionData(companionsObj) {
		let companionsArray = [];
		Object.keys(companionsObj).forEach((id) => {
			companionsArray.push({ id, username: companionsObj.nickname, x: companionsObj.x, y: companionsObj.y });
		});
		return companionsArray;
	}
}
