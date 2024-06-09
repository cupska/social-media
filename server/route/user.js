const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/register", userController.createUser);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUserHandler);

module.exports = router;
