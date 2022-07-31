const {User} = require("../../models")

const createUser = async (req,res) =>{
  try {
    const {username, email, password} = req.body;
    const user = await User.create({
      username, email, password
    });

    res.status(200).send({
      status: "OK",
      message : "Add user successfull",
      data : user
    })
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message : error.message
    })
  }
}

const updateUser = async (req,res) =>{
  try {
    const id = await User.findByPk(Number(req.params.id));
    if(!id) return res.send("Not found")

    const {username, email, password} = req.body;
    await id.update({username,email,password});
    res.status(200).send({
      status: "OK",
      message : "update user successfull",
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message : err.message
    })
  };
}

const deleteUser = async (req,res) =>{
  try {
    const id = await User.findByPk(Number(req.params.id));
    if(!id) return res.send("Not found")

    await id.destroy();
    res.status(200).send({
      status: "OK",
      message : "delete user successfull",
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message : err.message
    })
  };
}

const getAllUser = async(req,res) =>{
  try {
    const user = await User.findAll({});
    res.status(200).send({
      status : 200,
      message : "Successfull",
      data : user
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message : err.message
    })
  }
};

const getOneUser = async (req,res) =>{
  try {
    const id = await User.findByPk(Number(req.params.id));
    if(!id) return res.send("Not found")
    res.status(200).send({
      status: "OK",
      message : "get user successfull",
      data : id
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message : err.message
    })
  };
}
module.exports = {createUser,updateUser,deleteUser,getAllUser,getOneUser}