import express from 'express';
import { Application } from './framework';

async function main() {
  const app = new Application();

  app.register([]);

  await app.bootstrap();

  // start http server
  app.use(express.json({ limit: '5mb' }));

  app.listen(3000, () => console.log('Application is listening on port 3000'));
}

main();
