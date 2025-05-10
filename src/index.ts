import express from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthController, ExampleController } from './controllers';
import { Application } from './framework';
import { AuthMiddleware } from './middlewares';
import { EnvService } from './services';

async function main() {
  const app = new Application({
    providers: [
      {
        provide: EnvService,
        value: new EnvService({}),
      },
      {
        provide: PrismaClient,
        inject: [EnvService],
        factory: (env: EnvService) => {
          return new PrismaClient({
            datasources: {
              db: {
                url: env.get('DATABASE_URL', 'postgres://postgres:postgres@localhost:5432/test'),
              },
            },
            // log: ['query'],
          });
        },
      },
    ],
    middlewares: [AuthMiddleware({ exclude: req => req.originalUrl === '/auth/login' || req.originalUrl === '/auth/sign-up' })],
    controllers: [AuthController, ExampleController],
  });

  app.use(express.json({ limit: '5mb' }));

  await app.bootstrap();

  app.listen(3000, () => console.log('Application is listening on port 3000'));
}

main();
