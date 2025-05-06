import RBAC from 'rbac-ts'
import { PrismaClient } from '../../prisma/generated/prisma'

class Mananger {
    public core: {
        can: (role: string, operation: string | RegExp, params?: unknown) => Promise<boolean>;
    }
    constructor() {
        this.core = {
            can: (role: string, operation: string | RegExp, params?: unknown) => new Promise((resolve) => {
                resolve(true)
            })
        }
    }
     
    public async init(prisma: PrismaClient) {
        const roles = await prisma.role.findMany({
            include: {
                role_permission: {
                    include: {
                        permission: true,
                    }
                }
            }
        })

        const configuer = RBAC({
            enableLogger: false,
        })

        const mappedRoles = roles.reduce<Record<string, { can: string[] }>>((prev, curRole) => {
            prev[curRole.name] = { 
                can: curRole.role_permission.map(rp => rp.permission.name),
            };
            return prev;
        }, {});


        /*
        const mappedRoles = {}
        roles.forEach(role => {
            const permissions = []
            role.role_permission.forEach(rp => {
                permissions.push(rp.permission.name)
            })

            mappedRoles[role.name] = {
                can: permissions
            }
        })
        */

        this.core = configuer(mappedRoles)
    }
}

export const RBACMananger = new Mananger()