import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { RequestMiddleware } from '../framework';

export class AuthMiddleware implements RequestMiddleware {
  public handle(req: Request, res: Response, next: NextFunction) {
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
    jwt.verify(token, 'mysecret', (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }
      console.log(decoded);
      next();
    });
  }
}
