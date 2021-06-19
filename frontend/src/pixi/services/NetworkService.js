import { io } from "socket.io-client";

/**
 * Steps:
 * 1.) send register
 * 2.) receive init
 * every 500ms:
 * 3.) send poschange & receive stateupdate
 * 
 * init -> init my gamestate. sent after register
 * stateupdate -> only received after init is received
 * register -> send player details
 * poschange -> change my position
 */

export default class NetworkService {
  constructor(url, gameStateService) {
    this.socket = io(url, { reconnection: false });
    this.gameStateService = gameStateService;

    this.socket.on('connect', () => console.log("Connected to server!"));

    // this will only be received after init is called.
    this.socket.on('stateupdate', (gameState) => {
      delete gameState[this.socket.id];
      this.gameStateService.companions = gameState;
    });
  }

  async init() {
    this.socket.emit("register", this.gameStateService.player);

    return new Promise((resolve, reject) => {
      this.socket.on("init", (initialGameState) => {
        if (!initialGameState) reject();

        delete initialGameState[this.socket.id];
        this.gameStateService.player.id = this.socket.id;
        this.gameStateService.companions = initialGameState;
        resolve();
      });
    });
  }

  poschange() {
    console.log("service" ,this.gameStateService.player);
    this.socket.emit("poschange", this.gameStateService.player.x, this.gameStateService.player.y);
  }
}

// export default class NetworkService {
//   constructor(url, gameStateService, nickname, x, y) {
//     console.log(url);
//     this.socket = io(url);
//     this.gameStateService = gameStateService;
//     this.connectAsPlayer(nickname, x, y);

//     this.socket.on('stateupdate', (gamestate) => {
//       delete gamestate[this.socket.id];

//       this.gameStateService.companions = gamestate;
//     });

//     setInterval(this.sendPlayerStateUpdate.bind(this), 500);
//   }

//   sendPlayerStateUpdate() {
//     this.socket.emit('posupdate', this.gameStateService.player.x, this.gameStateService.player.y);
//   }

//   connectAsPlayer(nickname, x, y) {
//     const idPromise = new Promise((resolve, reject) => {
//       this.socket.on('connect', () => {
//         if (this.socket.connected) {
//           resolve(this.socket.id);
//           console.log("Connected to server!");
//         } else reject(null);
//       });
//     });

//     Promise.all([idPromise]).then(res => {
//       this.gameStateService.player = {
//         ...this.gameStateService.player,
//         id: res[0]
//       }
//     });
    
//     this.socket.emit('entergame', nickname, x, y);
//   }
// }
