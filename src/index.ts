import express from 'express';
import { AuthController, ExampleController } from './controllers';
import { Application } from './framework';
import { EnvService } from './services';

async function main() {
  const app = new Application({
    providers: [
      {
        provide: EnvService,
        value: new EnvService({}),
      },
    ],
    controllers: [AuthController, ExampleController],
  });

  app.use(express.json({ limit: '5mb' }));
  // app.use(
  //   session({
  //     secret: 'mycookiesecret',
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: {
  //       secure: false,
  //       httpOnly: true,
  //       maxAge: 60 * 60 * 1000, // 1h
  //     },
  //   })
  // );
  await app.bootstrap();

  app.listen(3000, () => console.log('Application is listening on port 3000'));
}

main();
