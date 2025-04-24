import { Request, Response, NextFunction } from 'express';
import { RequestMiddleware } from '../framework/interfaces';

export class ExampleMiddleware implements RequestMiddleware {
  public handle(req: Request, res: Response, next: NextFunction) {
    console.log(req.method, '-', req.url);
    next();
  }
}
