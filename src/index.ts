import { App } from './server/server';

async function main() {
  const app = new App();
  await app.listen();
}

main();
