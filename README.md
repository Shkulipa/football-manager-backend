# Football manager Simulator(API)

---

TODO
- [ ] eslint for imports order <br>
- [ ] players controller

## Installation
```
yarn
```

---

## Run Application
if you need a get up the mongoDB localy, use it:
```
yarn docker:compose
```
then you can open in browser: [UI of MongoDB](http://localhost:8081)(for UI of DB)
<br><br>
if you wanna run from deployed on the production or staging, run this:
```
yarn start:prod (will take variables from .env.production)
```
```
yarn start:dev  (will take variables from .env.development)
```
```
yarn start:local (will take variables from .env.local)
```
```
yarn prod (run dist/main)
```

---

## Docs
1. generate compodoc(documentation):
```
yarn compodoc
```
2. Open in browser [Compodoc](http://127.0.0.1:8081)

<br><br>

small documentation: 
1. in terminal:
``` 
yarn start:local
```
2. [Small docs](http://localhost:8080)

<br><br>

Swagger: 
- [Localhost](http://localhost:8080/api/docs)
- [Development](http://localhost:8080/api/docs)
- [Production](http://localhost:8080/api/docs)

---
## Commits
several methods:
in terminal:
```
yarn commit
```
or
```
git commit "fix|merge|docs: ..."
```

<br><br>
If an error occurs during the commit:
```
Aborting commit. Your commit message is invalid.(Please, check README.md)
```

<br><br>
Your commit should be like "feat: YOUR_DESCRIPTION_COMMIT"
for merge "Merge dev to prod"
feat - you can change on the another word like: feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert|content

<br><br>
Also, you commit shouldn't more than 88 characters
(You can check file with rules: .husky/commit-msg)

---

## CI/CD (deploy)
1. I am using railway.app here
2. login there
3. there is a folder with name "football-manager", there 2 brunches for prod and dev

<br>

Where "prod" brunch is a production([Production  Link](https://football-manager-backend-prod.up.railway.app)) "dev" brunch is a stagging([Stagging  Link](https://football-manager-backend-dev.up.railway.app)).

<br><br>
for deploy, you need just make a commit in according brunch and make a push into repository, and after deploying will be automatically in fit website was mentioned above in(CI/CD).

---

## CLI
docs: [CLI docs](https://docs.nestjs.com/cli/overview)
```
yarn nest generate --help
```
```
yarn nest generate res --no-spec
```

---

## Errors Exceptions in Nestjs
classes: [read article](https://docs.nestjs.com/exception-filters)<br>
status: [read article](https://medium.com/@abeythilakeudara3/nestjs-exception-filters-part-02-24afcbe116cf)

---

## Folder Structure

docs: [article](https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401)

---

## Migrations
first of all, install ts-node:
```
npm i -g ts-node
```

<br><br>
common commands:
```
yarn migrate:help
```

<br><br>
migrations are using the "migrations.ts" file,
```
yarn migrate:prod:status (for prod DB)
```
```
yarn migrate:dev:status (for dev DB)
```
```
yarn migrate:local:status (for local DB)
```

<br><br>
for seeds are using "seeds.ts", and follow commands:
```
yarn seeds:prod:status (for prod DB)
```
```
yarn seeds:dev:status (for dev DB)
```
```
yarn seeds:local:status (for local DB)
```

---

# Tests
tutorials:
1. [watch video](https://www.youtube.com/watch?v=1Vc6Xw8FMpg&ab_channel=MichaelGuay)

<br><br>

---

<br><br>