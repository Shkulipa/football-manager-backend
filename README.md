## Installation
```
yarn
```

## Running the app
if you need a get up the mongoDB localy, use it:
```
yarn docker
```
then open in browser: http://localhost:8081 (for UI of DB)

# Run Application
```
1. yarn start:prod (will take variables from .env.production)
2. yarn start:dev  (will take variables from .env.development)
3. yarn start:local (will take variables from .env.local)
4. yarn prod (run dist/main)
```

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
migrations are using the "mongo-migrations.js" file, , and follow commands:
```
yarn migrate:docs
yarn migrate:init
yarn migrate:help
yarn migrate:status
yarn migrate:create
yarn migrate:up
yarn migrate:down
```

for seeds are using "mongo-seeds.js", and follow commands:
```
yarn seeds:status
yarn seeds:create
yarn seeds:up
yarn seeds:down
```
