import { io } from "socket.io-client";

export default class NetworkService {
  constructor(url, gameStateService, nickname, x, y) {
    console.log(url);
    this.socket = io(url);
    this.gameStateService = gameStateService;
    this.connectAsPlayer(nickname, x, y);

    this.socket.on('stateupdate', (gamestate) => {
      delete gamestate[this.socket.id];

      this.gameStateService.companions = gamestate;
    });

    setInterval(this.sendPlayerStateUpdate.bind(this), 500);
  }

  sendPlayerStateUpdate() {
    this.socket.emit('posupdate', this.gameStateService.player.x, this.gameStateService.player.y);
  }

  connectAsPlayer(nickname, x, y) {
    const idPromise = new Promise((resolve, reject) => {
      this.socket.on('connect', () => {
        if (this.socket.connected) {
          resolve(this.socket.id);
          console.log("Connected to server!");
        } else reject(null);
      });
    });

    Promise.all([idPromise]).then(res => {
      this.gameStateService.player = {
        ...this.gameStateService.player,
        id: res[0]
      }
    });
    
    this.socket.emit('entergame', nickname, x, y);
  }
}
