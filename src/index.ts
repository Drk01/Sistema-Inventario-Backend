import Server from './server/server';
import * as bodyParser from 'body-parser';

const server = Server.init(8080);
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: true }));

server.start(() => console.log('Servidor iniciado'));
