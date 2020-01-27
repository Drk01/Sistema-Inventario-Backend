import { Router, Request, Response } from 'express';

class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {}
}

const AuthRoutes = new AuthRouter();

export default AuthRoutes.router;
