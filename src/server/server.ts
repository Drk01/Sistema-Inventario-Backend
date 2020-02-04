import { Application } from 'express';
import * as express from 'express';
import * as morgan from 'morgan';
import AuthRoutes from '../routes/AuthRoutes';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

export class App {
  app: Application;

  constructor(private port?: number | string) {
    this.database();
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private routes() {
    const router = express.Router();

    this.app.use('/api', AuthRoutes);
  }

  private async database() {
    try {
      await createConnection();
    } catch (error) {
      console.error('TypeORM error', error);
    }
  }

  async listen(): Promise<void> {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
