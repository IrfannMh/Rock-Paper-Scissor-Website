const express = require("express");
const router = express.Router();
const gameController = require("../../controllers/admin/GameController");

router.get("/", gameController.getAllGame);

module.exports = router;