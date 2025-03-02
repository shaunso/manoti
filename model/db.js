import mysql from 'mysql2';
import 'dotenv/config';

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbName2 = process.env.DB_NAME_2;

const pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  connectionLimit: 10
});

const pool2 = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName2,
  connectionLimit: 10
});

export { pool, pool2 };