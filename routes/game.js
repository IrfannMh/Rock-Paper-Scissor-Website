const express = require("express");
const router = express.Router();
const gameController = require("../controllers/restclient/GameController");

router.get("/", gameController.getAllGame);
router.post("/", gameController.createGame);
router.post("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);
router.get("/:id", gameController.getOneGame);


module.exports = router;