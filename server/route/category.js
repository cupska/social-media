const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");

const basePath = "/categorys";
// const path: Record<string, { path: string; controller: Function }>[] = [
//   {
//     getAll: {
//       path: "/",
//       controller: categoryController.getAll,
//     },
//   },
// ];
router.get(basePath, categoryController.getAll);
router.get(`${basePath}/:id`, categoryController.getOne);

module.exports = router;
