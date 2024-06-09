const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./config/db");
const categoryRouter = require("./route/category");
const userRouter = require("./route/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(categoryRouter);
app.use(userRouter);

app.get("/", (req, res, next) => {
  res.send("test");
});

// app.listen(PORT, () => {
//   console.log("server berjalan di port: " + PORT);
// });

module.exports = app;
