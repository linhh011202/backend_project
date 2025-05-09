import express from 'express';
import { AuthController, ExampleController } from './controllers';
import { Application } from './framework';
import { EnvService } from './services';
import { PrismaClient } from '../prisma/generated/prisma'
import { RBAC } from './services'

async function main() {
  const prisma = new PrismaClient({
    log: ['query'],
  })

  await RBAC.initialize(prisma)

  const app = new Application({
    providers: [
      {
        provide: EnvService,
        value: new EnvService({}),
      },
      {
        provide: PrismaClient,
        value: prisma,
        
      },
    ],
    controllers: [AuthController, ExampleController],
  });

  app.use(express.json({ limit: '5mb' }));

  await app.bootstrap();

  app.listen(3000, () => console.log('Application is listening on port 3000'));
}

main();

/*
product

C create              | /v1/product/create
U update              | /v1/product/edit
D delete              | /v1/product/delete
R get one/details     | /v1/product/get-details
  get list            | /v1/product/list

POST      /v1/product
PUT/PATCH /v1/product
DELETE    /v1/product
GET       /v1/product => get list
GET       /v1/product/:id => get details


*/