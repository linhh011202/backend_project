# backend_project

# How to run project

```bash
# Clone project
git clone git@github.com:linhh011202/backend_project.git

# Open project with VSCode
code backend_project

# Install yarn
npm install -g yarn

# Install dependencies
yarn install

# Run app
yarn start:dev
```

# How to generate prisma client

```bash
yarn prisma:generate
# Use this import in your code
# import { PrismaClient } from '@prisma/client'
```

# How to generate migration

- Generate without running it

```bash
yarn prisma:migrate --create-only --name=<migration-name>
# Eg: yarn prisma:migrate --create-only --name=modify-users-table
```

- Apply pending migrations

```bash
yarn prisma:deploy
```
