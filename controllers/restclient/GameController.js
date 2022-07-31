const {Game,User} = require("../../models");

const getAllGame = async (req, res) => {
  try {
    const game = await Game.findAll({});
    res.status(200).send({
      status: "OK",
      message: "get all Game Successfull",
      data: game
    }); 
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message
    })
  }
};

const getOneGame = async (req, res) => {
  try {
    const id = await Game.findByPk(Number(req.params.id));
    if (!id) return res.send("Not found")
    res.status(200).send({
      status: "OK",
      message: "get Game successfull",
      data: id
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message
    })
  };
};

const createGame = async (req, res) => {
  try {
    const { userChoose,compChoose,result,userId } = req.body;
    const game = await Game.create({
        userChoose,compChoose,result
    });
    const user = await User.findOne({ id: userId }); 
    
    const histroygame = await user.addGame(game);
    res.status(200).send({
      status: "OK",
      message: "Add Game successfull",
      data: histroygame
    });

  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message
    })
  }
};

const updateGame = async (req, res) => {
  try {
    const id = await Game.findByPk(Number(req.params.id));
    if (!id) return res.send("Not found")

    const { userChoose,compChoose,result } = req.body;
    await id.update({ userChoose,compChoose,result });
    res.status(200).send({
      status: "OK",
      message: "update Game successfull",
      data: id
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message
    })
  };
};

const deleteGame = async (req, res) => {
  try {
    const id = await Game.findByPk(Number(req.params.id));
    if (!id) return res.send("Not found")

    await id.destroy();
    res.status(200).send({
      status: "OK",
      message: "delete Game successfull",
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
          message: err.message
    })
  };
};

module.exports = { getAllGame,getOneGame,createGame,updateGame,deleteGame }