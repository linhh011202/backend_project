import { Controller, Get, HttpExecutionContext, Permissions, UseGuards, UseMiddlewares } from '../framework';
import { PermissionGuard } from '../guards';
import { AuthMiddleware } from '../middlewares';

@Controller('/v1')
export class ExampleController {
  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('list.example')
  @Get('/examples')
  public list(ctx: HttpExecutionContext) {
    return [{ name: 'ok' }];
  }
}
