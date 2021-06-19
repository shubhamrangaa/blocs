import { io } from 'socket.io-client';

import pino from 'pino';

const logger = pino();

let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);

const socket = io('http://127.0.0.1:5000');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const move = () => {
  const a = Math.random() * 10;

  if (a < 2.5) x += 1;
  else if (a < 5) x -= 1;
  else if (a < 7.5) y += 1;
  else if (a <= 10) y -= 1;
};

const iterateMove = async () => {
  for (;;) {
    logger.info({ x, y });
    socket.emit('posupdate', x, y);
    move();
    // eslint-disable-next-line no-await-in-loop
    await sleep(250);
  }
};

socket.on('connect', () => {
  logger.info('connected');

  socket.emit('entergame', 'd1vshar', 0, 0);

  iterateMove();

  socket.on('stateupdate', (state) => {
    logger.info(state);
  });
});
