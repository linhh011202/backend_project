import { HttpExecutionContext, HttpMetadataReflector, RequestGuard } from '../framework';

export class PermissionGuard implements RequestGuard {
  public can(ctx: HttpExecutionContext) {
    const permissions = HttpMetadataReflector.permissions(ctx.handler);
    return permissions.some((permission) => ctx.req.user.permissions.includes(permission))
  }
}
