const db = require("../config/db");

const userModel = {
  async createUser({ name, username, password }) {
    const newUser = await db.query(
      `INSERT INTO public."user" (name,username,password) VALUES ('${name}','${username}','${password}') RETURNING *`
    );
    return newUser.rows[0];
  },
  async getUser(id) {
    const user = await db.query(
      `select * from public."user" where id = '${id}'`
    );
    return user.rows[0];
  },
  async delUserById(id) {
    return await db.query(`DELETE FROM public."user" WHERE id = ${id}`);
  },
  async updateUser(id, payload) {
    const datasetQuery = Object.keys(payload).reduce(
      (acc, curr, currIdx, arr) => {
        return `${acc} ${curr} = '${payload[curr]}' ${
          currIdx < arr.length - 1 ? "," : ""
        }`;
      },
      ""
    );

    const user = await db.query(
      `UPDATE public."user" SET ` + datasetQuery + ` WHERE id = ${id} RETURNING *`
    );
    return user.rows[0];
  },
};

module.exports = userModel;
