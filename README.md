## Installation
```
yarn
```

# Run Application
if you need a get up the mongoDB localy, use it:
```
yarn docker
```
then open in browser: http://localhost:8081 (for UI of DB)

if you wanna run from deployed on the production or staging, run this:
```
1. yarn start:prod (will take variables from .env.production)
2. yarn start:dev  (will take variables from .env.development)
3. yarn start:local (will take variables from .env.local)
4. yarn prod (run dist/main)
```

## CI/CD (deploy)
1. i am using railway.app here
2. login there
3. there is a folder with name "football-manager", there 2 brunches for prod and dev

Where "prod" brunch is a production(https://football-manager-backend-prod.up.railway.app) "dev" brunch is a staging(https://football-manager-backend-dev.up.railway.app).

for deploy, you need just make a commit in according brunch and make a push into repository, and after deploying will be automatically in fit website was mentioned above in(CI/CD).

## CLI
docs: https://docs.nestjs.com/cli/overview
```
1. nest generate --help
2. nest generate res --no-spec
```

## Errors Exceptions in Nestjs
classes: https://docs.nestjs.com/exception-filters
status: https://medium.com/@abeythilakeudara3/nestjs-exception-filters-part-02-24afcbe116cf

## Folder Structure
docs: https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401

## Migrations
common commands:
```
yarn migrate:docs
yarn NODE_ENV= migrate:init
yarn NODE_ENV= migrate:help
```

migrations are using the "mongo-migrations.js" file,
```
migrate:prod:status (for prod DB)
migrate:dev:status (for dev DB)
migrate:local:status (for local DB)
...
```

for seeds are using "mongo-seeds.js", and follow commands:
```
seeds:prod:status (for prod DB)
seeds:dev:status (for dev DB)
seeds:local:status (for local DB)
```
