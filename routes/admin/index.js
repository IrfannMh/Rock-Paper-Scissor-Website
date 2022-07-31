const express = require("express");
const router = express.Router();
const user = require("./userAdmin");
const game = require("./game");
const biodata = require("./bioAdmin");

const {User,Game} = require("../../models");

router.use("/users", user);
router.use("/games", game);
router.use("/biodatas", biodata);

router.get("/dashboard",async (req,res) =>{

  const userCount = await User.count({});
  const gamesCount = await Game.count({});

  res.status(200).render('dashboard',{
    userCount,
    gamesCount
  });
});


module.exports = router;