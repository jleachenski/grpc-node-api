import pool from "../db_conn.js";

const manipulateBook = async (call, callback) => {
  const client = await pool.connect();
  console.log(call)

  try {
    await client.query("BEGIN");

    const statement = {
      name: "manipulate-book",
      text: "INSERT INTO books(name, pages) VALUES($1, $2)",
      values: [call.request.books[0].name, call.request.books[0].pages],
    };

    await client.query(statement);

    await client.query("COMMIT");

    callback(null);
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

export default manipulateBook;
