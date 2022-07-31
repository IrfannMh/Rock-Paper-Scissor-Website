const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/admin/UserController");

router.get("/", UserController.getAllUser);
router.get("/create", UserController.getForm);
router.post("/create", UserController.createUser);
router.get("/:id/edit", UserController.getFormEdit);
router.post("/:id/edit", UserController.updateUser);
router.get("/:id/delete", UserController.deleteUser);

module.exports = router;