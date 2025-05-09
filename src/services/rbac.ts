import { PrismaClient, role } from '../../prisma/generated/prisma'

class rbac {
    private roleMap: { [key: string]: string[] } = {}

    private addRole(role: string) {
        if (!(role in this.roleMap)) {
            this.roleMap[role] = []
        }
    }

    private addPermission(role: string, permission: string) {
        this.roleMap[role].push(permission)
    }

    public async initialize(prisma: PrismaClient) {
        const roles = await prisma.role.findMany({
            include: {
                role_permission: {
                    include: {
                        permission: true,
                    }
                }
            }
        })

        roles.forEach((role) => {
            this.addRole(role.name)
            role.role_permission.forEach((rp) => {
                this.addPermission(role.name, rp.permission.name)
            })
        })

    }

    public can(role: string, permission: string): boolean {
        return this.roleMap[role] && this.roleMap[role].includes(permission)
    }
}

export const RBAC = new rbac()