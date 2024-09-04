import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  user: "postgres",
  password: "example",
  host: "db",
  port: 5432,
  database: "grpc",
});

await db.connect();

export default db;