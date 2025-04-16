import express from 'express';
import { Application } from './framework';
import { ExampleController } from './controllers/example.controller';

async function main() {
  const app = new Application({
    providers: [],
    controllers: [ExampleController],
  });


  app.use(express.json({ limit: '5mb' }));

  await app.bootstrap();

  app.listen(3000, () => console.log('Application is listening on port 3000'));
}

main();
