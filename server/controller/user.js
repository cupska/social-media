const userModel = require("../model/user");

const userController = {
  async createUser(req, res) {
    try {
      const { name, username, password } = req.body;
      const { password: pw, ...restUserData } = await userModel.createUser({
        name,
        username,
        password,
      });

      res.status(201).json({ data: restUserData });
    } catch (error) {
      let errMsg, errCode;
      switch (error.constraint) {
        case "unik_user":
          errMsg = "username tidak tersedia";
          errCode = 400;
          break;

        default:
          errCode = 400;
          errMsg = "Telah Terjadi Kesalahan";
          break;
      }
      res.status(errCode).send(errMsg);
    }
  },
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const userData = await userModel.getUser(id);
      const { password, username, ...restData } = userData;

      res.status(200).json({ data: restData });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async updateUserHandler(req, res) {
    const { id } = req.params;
    try {
      const { password, username, ...restUserData } =
        await userModel.updateUser(id, req.body);
      res.json({ data: restUserData });
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = userController;
