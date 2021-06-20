import pino from 'pino';

const logger = pino();
export default class GameStateHandler {
  constructor(io) {
    this.io = io;
    this.players = {};
    this.playerSockets = {};
  }

  addPlayer(id, socket, nickname, x, y) {
    this.players[socket.id] = {
      nickname, x, y,
    };

    logger.info(`Joined: ${JSON.stringify(this.players[socket.id])}`);

    this.playerSockets[socket.id] = socket;
  }

  deletePlayer(id) {
    logger.info(`Left: ${JSON.stringify(this.players[id])}`);

    delete this.players[id];
    delete this.playerSockets[id];
  }

  setPostionForPlayer(id, x, y) {
    const player = this.players[id];
    player.x = x;
    player.y = y;

    this.players[id] = player;
  }

  getStateObj() {
    return this.players;
  }

  getSocketForPlayer(id) {
    return this.playerSockets[id];
  }
}
