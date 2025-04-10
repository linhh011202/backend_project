export function toStringToken(token: Function | string) {
  return typeof token === 'string' ? token : token.name;
}

class A {}

A.name;
