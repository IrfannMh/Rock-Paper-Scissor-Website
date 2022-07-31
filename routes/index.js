const express = require("express");
const router = express.Router();
const user = require("./user");
const game = require("./game");
const biodata = require("./biodata");

router.use("/users", user);
router.use("/games", game);
router.use("/biodatas", biodata);

module.exports = router;