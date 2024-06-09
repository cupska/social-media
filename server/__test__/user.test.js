const supertest = require("supertest");
const app = require("../app");
const userModel = require("../model/user");
const userController = require("../controller/user");

describe("API user", () => {
  let user = {
    name: "sudirman",
    username: "sudirman007",
    password: "pass123",
  };

  afterAll(() => {
    userModel.delUserById(user.id);
  });

  describe("CREATE user", () => {
    it("return created user & status success", async () => {
      const newUser = await supertest(app)
        .post("/register")
        .send({ ...user })
        .expect(201);
      expect(newUser.body.data).toHaveProperty("id");
      user.id = newUser.body.data.id;
    });

    it("return error massage 'username tidak tersedia' karena username sudah ada", async () => {
      const res = await supertest(app)
        .post("/register")
        .send({ ...user })
        .expect(400);
      expect(res.error.text).toBe("username tidak tersedia");
    });
  });

  describe("GET user by ID", () => {
    it("return data user & success ", async () => {
      const data = await supertest(app).get(`/user/${user.id}`);
    });
  });

  describe("UPDATE user", () => {
    it("return updated user & status success", async () => {
      const payloadForUpdate = {
        name: "tete",
        image: "asdasd",
        username: "asdqweqwd",
      };

      const updatedUser = await supertest(app)
        .put(`/user/${user.id}`)
        .send(payloadForUpdate)
        .expect(200);
      expect(updatedUser.body).toHaveProperty("data");
      expect(updatedUser.body.data).toHaveProperty("id");
      expect(updatedUser.body.data).not.toHaveProperty([
        "password",
        "username",
      ]);
    });
  });
});
