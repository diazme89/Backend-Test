import Server from './src/models/Server';

export const server = new Server();

export const app = server.getApp();

server.listen();
