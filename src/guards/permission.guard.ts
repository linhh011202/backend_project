import { HttpExecutionContext, HttpMetadataReflector, RequestGuard } from '../framework';
import { RBAC, EnvService } from '../services';

export class PermissionGuard implements RequestGuard {
  public async can(ctx: HttpExecutionContext) {
    const permissions = HttpMetadataReflector.permissions(ctx.handler);

    return permissions.some((permission) => {
    // @ts-ignore
      return RBAC.can(ctx.req.role, permission)
    })
  }
}
