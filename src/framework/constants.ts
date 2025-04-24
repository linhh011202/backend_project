export enum HttpMetadata {
  Method = 'HTTP.METHOD',
  Path = 'HTTP.PATH',
  Prefix = 'HTTP.PREFIX',
  Middlewares = 'HTTP.MIDDLEWARES',
  Guards = 'HTTP.GUARDS',
  Permissions = 'HTTP.PERMISSIONS',
}

export enum HttpMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
}
