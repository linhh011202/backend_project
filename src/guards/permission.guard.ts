import { HttpExecutionContext, HttpMetadataReflector, RequestGuard } from '../framework';

export class PermissionGuard implements RequestGuard {
  public can(ctx: HttpExecutionContext) {
    const permissions = HttpMetadataReflector.permissions(ctx.handler);
    const user = ctx.req.user;
    return permissions.some(permission => {
      return user.role.permissions.some(p => p.name === permission);
    });
  }
}
