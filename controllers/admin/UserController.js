const {User} = require("../../models")

const createUser = async (req,res) =>{
  try {
    const {username, email, password} = req.body;
    const user = await User.create({
      username, email, password
    });
    res.redirect("/users");
  } catch (error) {
    res.status(500).send({
      status: 500,
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
    res.redirect("/users");
  } catch (err) {
    res.status(500).send({
      status: 500,
      message : err.message
    })
  };
}

const deleteUser = async (req,res) =>{
  try {
    const id = await User.findByPk(Number(req.params.id));
    if(!id) return res.send("Not found")

    await id.destroy();
    console.log("delete success")
    res.redirect("/users");
  } catch (err) {
    res.status(500).send({
      status: 500,
      message : err.message
    })
  };
}

const getAllUser = async(req,res) =>{
  const user = await User.findAll({});
  res.render("user", { user });
};

const getForm = async(req,res) =>{
  res.render("createUser");
};

const getFormEdit = async(req,res) =>{
  const user = await User.findByPk(Number(req.params.id));

  if (!user) return res.send("Not Found")
  res.render("editUser",{ id: user.id, username: user.username,email: user.email, password: user.password });
};

module.exports = {createUser,updateUser,deleteUser,getAllUser,getForm,getFormEdit}