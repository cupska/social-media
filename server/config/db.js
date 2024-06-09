const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// async function testConnection() {
//   try {
//     const res = await db.query("SELECT NOW()");
//     console.log("Connection successful:", res.rows[0]);
//   } catch (err) {
//     console.error("Connection failed:", err);
//   } finally {
//     db.end();
//   }
// }

// testConnection();

module.exports = db;
