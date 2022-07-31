const express = require("express");
const router = express.Router();
const UserController = require("../controllers/restclient/UserController");

router.get("/", UserController.getAllUser);
router.post("/", UserController.createUser);
router.post("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:id", UserController.getOneUser)


module.exports = router;