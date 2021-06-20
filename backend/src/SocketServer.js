import { createServer } from 'http';
import { Server } from 'socket.io';
import GameStateHandler from './GameStateHandler';

export default class SocketServer {
  constructor(port) {
    this.port = port;
    this.httpServer = createServer();
    this.io = new Server(this.httpServer, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
      },
    });
    this.gameStateHandler = new GameStateHandler(this.io);
  }

  sendGameState() {
    this.io.to('initialized').emit('stateupdate', this.gameStateHandler.getStateObj());
  }

  // sendGlobalMessage() {
  //   this.io.emit('');
  // }

  start() {
    this.io.on('connection', (socket) => {
      socket.on('register', (player) => {
        this.gameStateHandler.addPlayer(socket.id, socket, player.nickname, player.x, player.y);
        socket.emit('init', this.gameStateHandler.getStateObj());
        socket.join('initialized');
      });

      socket.on('poschange', (x, y) => {
        this.gameStateHandler.setPostionForPlayer(socket.id, x, y);
      });

      socket.on('disconnect', () => {
        this.gameStateHandler.deletePlayer(socket.id);
      });

      // socket.on('messagesend', (message, recId) => {
      //   if (recId) {
      //     const receiverSocket = this.gameStateHandler.getSocketForPlayer(recId);
      //     if (receiverSocket) {
      //       receiverSocket.emit('messagereceive', { senderId: socket.id, message, dm: true });
      //     }
      //   }
      //   this.io.emit('messagereceive', { senderId: socket.id, message });
      // });
    });

    this.sendGameState();
    setInterval(this.sendGameState.bind(this), 500);

    return this.httpServer.listen(this.port);
  }
}
