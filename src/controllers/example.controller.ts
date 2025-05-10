import { PermissionName } from '../constants';
import { Controller, Delete, Get, HttpExecutionContext, Permissions, Post, Put, UseGuards } from '../framework';
import { PermissionGuard } from '../guards';

@Controller('/v1/object')
export class ExampleController {
  @UseGuards(PermissionGuard)
  @Permissions(PermissionName.CreateExample)
  @Post()
  public create(ctx: HttpExecutionContext) {
    return [{ name: 'delete ok' }];
  }

  @UseGuards(PermissionGuard)
  @Permissions(PermissionName.DeleteExample)
  @Delete('/:id')
  public delete(ctx: HttpExecutionContext) {
    return [{ name: 'delete ok' }];
  }

  @UseGuards(PermissionGuard)
  @Permissions(PermissionName.ModifyExample)
  @Put('/:id')
  public edit(ctx: HttpExecutionContext) {
    return [{ name: 'edit ok' }];
  }

  @UseGuards(PermissionGuard)
  @Permissions(PermissionName.ViewExample)
  @Get('')
  public view(ctx: HttpExecutionContext) {
    ctx.req.query.abc;
    ctx.req.query.sca_esv;
    return [{ name: 'view ok' }];
  }
}
