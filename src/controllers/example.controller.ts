import { Controller, Get, HttpExecutionContext, Permissions, UseGuards, UseMiddlewares } from '../framework';
import { PermissionGuard } from '../guards';
import { AuthMiddleware } from '../middlewares';


// export class MyGuard implements RequestGuard {
//   public can(ctx: HttpExecutionContext) {
//     const permissions = ctx.req.permissions
//     return permissions.some((permission) => ctx.req.user.permissions.includes(permission))
//   }
// }

@Controller('/v1')
export class ExampleController {
  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('delete')
  @Get('/delete')
  public delete(ctx: HttpExecutionContext) {
    return [{ name: 'delete ok' }];
  }

  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('edit')
  @Get('/edit')
  public edit(ctx: HttpExecutionContext) {
    return [{ name: 'edit ok' }];
  }

  
  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('view')
  @Get('/view')
  public view(ctx: HttpExecutionContext) {
    return [{ name: 'view ok' }];
  }
}
