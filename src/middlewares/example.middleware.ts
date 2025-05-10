import { NextFunction, Request, Response } from 'express';
import { Injectable, RequestMiddleware } from '../framework';

@Injectable()
export class ExampleMiddleware implements RequestMiddleware {
  public handle(req: Request, res: Response, next: NextFunction) {
    console.log(req.method, '-', req.url);
    next();
  }
}
