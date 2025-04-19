import { Controller, Get, HttpExecutionContext, UseMiddlewares } from '../framework';
import { AuthMiddleware, ExampleMiddleware } from '../middlewares';

@Controller('/v1')
export class ExampleController {
  @UseMiddlewares(AuthMiddleware)
  @Get('/examples')
  public list(ctx: HttpExecutionContext) {
    return [{ name: 'ok' }];
  }
}
