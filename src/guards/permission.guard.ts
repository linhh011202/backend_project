import { HttpExecutionContext, HttpMetadataReflector, RequestGuard } from '../framework';
import { RBACMananger } from '.'

export class PermissionGuard implements RequestGuard {
  public async can(ctx: HttpExecutionContext) {
    const permissions = HttpMetadataReflector.permissions(ctx.handler);

    // @ts-ignore
    return RBACMananger.core.can(ctx.req.role, permissions[0])
    // return permissions.some((permission) => ctx.req.user.permissions.includes(permission))
  }
}
