import { App } from './server/server';
import * as dotenv from 'dotenv';

async function main() {
  dotenv.config();

  const app = new App();
  await app.listen();
}

main();
