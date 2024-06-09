const db = require("../config/db.js");

// CATEGORY TABLE
module.exports = {
  async selectAll() {
    const data = await db.query(
      'SELECT * FROM public."category" ORDER BY id ASC'
    );
    return data;
  },
  async findOne(id) {
    return await db.query(
      `SELECT * FROM public."category" where id = ${id} ORDER BY id ASC `
    );
  },
};

// console.log(db);
