import { createPool } from 'mysql2';
import { config } from 'dotenv';

config();

const connection = createPool({
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

export default connection;
