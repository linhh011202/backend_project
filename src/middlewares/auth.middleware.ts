import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { PrismaClient } from '../../prisma/generated/prisma';
import { Injectable, RequestMiddleware } from '../framework';
import { EnvService } from '../services';

interface MiddlewareOptions {
  exclude?: (req: Request) => boolean;
}

export function AuthMiddleware(opts: MiddlewareOptions) {
  @Injectable()
  class $AuthMiddleware implements RequestMiddleware {
    private users: Map<number, Express.IUser>;

    constructor(private env: EnvService, private prisma: PrismaClient) {
      this.users = new Map();
    }

    public async handle(req: Request, res: Response, next: NextFunction) {
      if (opts.exclude && opts.exclude(req)) {
        return next();
      }
      const authheader = req.headers['authorization'];
      if (!authheader) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }
      if (!authheader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }
      const token = authheader.replace('Bearer ', '');
      const id = await this.verify(token);
      if (this.users.has(id)) {
        req.user = this.users.get(id)!;
      } else {
        const user = await this.prisma.user.findFirst({
          where: {
            id: id,
          },
          select: {
            id: true,
            name: true,
            role: {
              select: {
                id: true,
                name: true,
                rolePermissions: {
                  select: {
                    permission: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
        if (!user) {
          res.status(401).json({ message: 'Unauthorized' });
          return;
        }
        const iuser: Express.IUser = {
          id: user.id,
          name: user.name,
          role: {
            id: user.role.id,
            name: user.role.name,
            permissions: user.role.rolePermissions.map(rp => rp.permission),
          },
        };
        this.users.set(id, iuser);
        req.user = iuser;
      }
      return next();
    }

    private verify(token: string) {
      return new Promise<number>((resolve, reject) => {
        jwt.verify(token, this.env.get('JWT_SECRET_KEY', 'mysecret') as string, (err, decoded: any) => {
          if (err) {
            return reject(err);
          }

          if (typeof decoded !== 'object') {
            return reject(new Error('Unauthorized'));
          }

          if (typeof decoded?.id !== 'number') {
            return reject(new Error('Unauthorized'));
          }

          return resolve(decoded.id);
        });
      });
    }
  }
  return $AuthMiddleware;
}
