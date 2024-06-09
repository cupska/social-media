const fetch = require("supertest");
const app = require("../app");

describe("request semua kategori", () => {
  it("return sukses dan return data kategorys bernilai array dengan urutan asc", async () => {
    const data = await fetch(app).get("/categorys");
    expect(data.statusCode).toBe(200);
    expect(data.body).toHaveProperty("data");
  });
});

describe("request get kategory by id", () => {
  it("return data dengan array.length = 1, status code 200", async () => {
    const data = await fetch(app).get(`/categorys/1`);
    expect(data.ok).toBeTruthy();
    expect(data.body).toHaveProperty("data");
    expect(data.body.data).toHaveLength(1);
  });
});
