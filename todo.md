1. Connect to database
2. Design table schema for user, role, permission
3. Create APIs:
- Make a registration
- Login
- bcrypt
- jwt
- verify jwt

----------------

- middleware to set permissions src\middlewares\auth.middleware.ts
- update permission guard to check permissions using rbac src\guards\permission.guard.ts

add APIs for testing
- 1 API only let one role can access
- 1 API let 2 roles can access
- 1 API for auth user can cess
