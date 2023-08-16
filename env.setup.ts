import { config } from 'dotenv';

const ENV = process.env.NODE_ENV;
config({ path: !ENV ? '.env' : `.env.${ENV}` });
