import express = require('express');
import * as path from 'path';
import { config } from 'dotenv';

export default class Server {
  public app: express.Application;

  constructor(private port: number) {
    this.app = express();
    config({ path: path.resolve(__dirname, '../.env') });
  }

  start(callback: any) {
    this.app.listen(this.port, callback);
  }

  static init(port: number): Server {
    return new Server(port);
  }
}
