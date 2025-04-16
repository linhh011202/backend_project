import { Request, Response, NextFunction } from 'express';

export class HttpExecutionContext {
  constructor(public readonly req: Request, public readonly res: Response, public readonly next: NextFunction) {}
}
