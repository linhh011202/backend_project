import { Controller, Get, Put, Delete, HttpExecutionContext, Permissions, UseGuards, UseMiddlewares } from '../framework';
import { PermissionGuard } from '../guards';
import { AuthMiddleware } from '../middlewares';

@Controller('/v1/object')
export class ExampleController {
  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('delete')
  @Delete('')
  public delete(ctx: HttpExecutionContext) {
    return [{ name: 'delete ok' }];
  }

  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('edit')
  @Put('')
  public edit(ctx: HttpExecutionContext) {
    return [{ name: 'edit ok' }];
  }

  
  @UseMiddlewares(AuthMiddleware)
  @UseGuards(PermissionGuard)
  @Permissions('view', 'edit')
  @Get('')
  public view(ctx: HttpExecutionContext) {
    ctx.req.query.abc
    ctx.req.query.sca_esv
    return [{ name: 'view ok' }];
  }
}




// method name:   | function 
// Delete    --> delete 
//Put    --> edit
// Get       --> view
