import express, { Application } from 'express';
import morgan from 'morgan';
import AuthRoutes from '../routes/AuthRoutes';

export class App {
  app: Application;

  constructor(private port?: number | string) {
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

  async listen(): Promise<void> {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
