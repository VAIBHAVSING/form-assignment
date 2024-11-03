import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 300000, // 30 seconds before an idle client is closed
  connectionTimeoutMillis: 2000, // 2 seconds maximum wait for connection
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
