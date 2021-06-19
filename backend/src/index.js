import pino from 'pino';
import SocketServer from './SocketServer';

const logger = pino();

const socketServer = new SocketServer(5000);

const socketHttp = socketServer.start();

logger.info(`SocketServer running on ${socketHttp.address().port}`);
