const category = require("../model/category");

module.exports = {
  async getAll(req, res) {
    // res.send("test");
    try {
      const data = await category.selectAll();

      res.status(200).send({ data: data.rows });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const data = await category.findOne(req.params.id);
      res.status(200).send({ data: data.rows });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
