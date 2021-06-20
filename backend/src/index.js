import pino from 'pino';
import SocketServer from './SocketServer';

const logger = pino();

if (!process.env.PORT) logger.info('PORT env not set');

const socketServer = new SocketServer(process.env.PORT);

const socketHttp = socketServer.start();

logger.info(`SocketServer running on ${socketHttp.address().port}`);
