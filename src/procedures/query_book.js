import pool from "../db_conn.js";

const queryBook = async (call, callback) => {
  const client = await pool.connect();

  try {
    const queryText = "SELECT id, name, pages FROM books";
    const res = await client.query(queryText);

    callback(null, {
        books: res.rows
    });
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};

export default queryBook;
