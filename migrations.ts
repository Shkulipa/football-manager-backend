import './env.setup';

import { mongoMigrateCli } from 'mongo-migrate-ts';

const { MONGODB_URL, MONGODB_DB, NODE_ENV } = process.env;

mongoMigrateCli({
  uri: MONGODB_URL,
  database: MONGODB_DB,
  migrationsDir: `src/database/migrations/${NODE_ENV}`, // folder where exist your migrations
  migrationsCollection: 'migrations', // name table in db fro migrations
});
