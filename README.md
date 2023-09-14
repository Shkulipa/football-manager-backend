# Football Manager Simulator(API)

---

## TODO
socket.io
- [ ] chat(common)

## Project start instructions 
### Installation
```
yarn
```

### Change your node
```
nvm use
```
if you haven't "nvm", install it on your computer

### Run Application
if you need a get up the mongoDB locale, use it:
```
yarn docker:compose
```
then you can open in browser: [UI of MongoDB](http://localhost:8081)(for UI of DB)
<br><br>
if you wanna run from deployed on the production or staging, run this:
```
yarn start:dev  (will take variables from .env.development)
```
```
yarn start:staging (will take variables from .env.staging)
```
```
yarn start:prod (will take variables from .env.production)
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

## Stripe
in terminal:
1. login stripe
2. stripe listen --forward-to http://localhost:8080/api/webhook
3. copy -> past secret that was selected in bold in .env STRIPE_WEBHOOK_ENDPOINT_SECRET

https://stripe.com/docs/testing#regulatory-cards - tests cards
webhooks: 
- https://stripe.com/docs/webhooks
- https://stripe.com/docs/payments/handling-payment-events

## CI/CD (deploy)
https://www.youtube.com/watch?v=G5gt5vIo1rA&ab_channel=MichaelGuay

<br>

Where "prod" brunch is a production([Production  Link](https://football-manager-backend-prod.up.railway.app)) "dev" brunch is a staging([Staging  Link](https://football-manager-backend-staging.up.railway.app)).

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
for migrations for countries, leagues, real teams, you need put images of logo in s3 bucket
first of all, install ts-node:
```
npm i -g ts-node
```

<br><br>
common commands:
```
yarn migrate:help [command](down, up and so on)
```

<br><br>
migrations are using the "migrations.ts" file,
```
yarn migrate:prod:status (for prod DB)
```
```
yarn migrate:stag:status (for stag DB)
```
```
yarn migrate:dev:status (for dev DB)
```

create
```
migrate:dev:create
```

up
```
yarn migrate:dev:up (for development DB)
```

down
```
yarn migrate:dev:down -l (for development DB)
```
Where -l last migrations

---

# Content taken:
- [flags](https://flagdownload.com/)
- [teams](https://www.whoscored.com)
- [Player skills & info](https://www.fmscout.com/club/arsenal.html)

# Tests
tutorials:
1. [watch video](https://www.youtube.com/watch?v=1Vc6Xw8FMpg&ab_channel=MichaelGuay)

# Stripe
tutorials:
1. [watch video](https://www.youtube.com/watch?v=-90OHI_Gd80&t=829s&ab_channel=UnBox)
