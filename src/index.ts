import express from 'express';
import { AuthController, ExampleController } from './controllers';
import { Application } from './framework';
import { EnvService } from './services';
import { PrismaClient } from '../prisma/generated/prisma'
import { RBACMananger } from './guards'

async function main() {
  const prisma = new PrismaClient({
    log: ['query'],
  })

  await RBACMananger.init(prisma)

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

// const middleware = (req, res, next) => {
//   const authheader = req.headers['authorization'];
//   if (!authheader) {
//     res.status(401).json({ message: 'Unauthorized' });
//     return;
//   }
//   if (!authheader.startsWith('Bearer ')) {
//     res.status(401).json({ message: 'Unauthorized' });
//     return;
//   }
//   const token = authheader.replace('Bearer ', '');
//   jwt.verify(token, 'mysecret', (err, decoded) => {
//     // @ts-ignore
//     const user = users.find(user => user.id === decoded.id);
//     req.user = user;
//     if (err) {
//       res.status(401).json({ message: 'Unauthorized' });
//       return;
//     }
//     console.log(decoded);
//     req.permissions = decoded.permissions
//   });
//   req.currentUser = user

//   next(req)
// }

// const checkPermission = permission => (req, res, next) => {
//   if !req.permissions.contains(permission) {
//     throw Error("access is denied")
//   }
//   next()
// }
//   @Router("/api/get-something")
//   @middleware
//   @checkPermission('view')
//   app(req, res, next) => {
//     return res
//   })

//   app.get("/api/update-something1", middleware, checkPermission('update'), (req, res, next) => {
//     return res
//   })

//   app.get("/api/something3", middleware, (req, res, next) => {
//     return res
//   })

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