const {Game} = require("../../models");

const getAllGame = async (req, res) => {
  try {
    const game = await Game.findAll({
    });
    res.render("game", { game });

  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message
    })
  }
};

module.exports = { getAllGame }