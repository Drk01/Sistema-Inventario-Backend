import Server from './server/server';

const server = Server.init(8080);

server.start(() => console.log('Servidor iniciado'));
