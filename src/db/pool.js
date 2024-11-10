import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_PORT);
console.log(process.env.DATABASE_NAME);

  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000
  })

export default pool;