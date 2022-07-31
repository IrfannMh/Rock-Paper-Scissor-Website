const {Biodata} = require("../../models");

const getAllBio = async (req, res) => {
  try {
    const bio = await Biodata.findAll({});
    res.render("biodata", { bio });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message
    })
  }
};

const getForm = async(req,res) =>{
    res.render("createBio");
};
  
const getFormBio = async(req,res) =>{
    const bio = await Biodata.findByPk(Number(req.params.id));

    if (!bio) return res.send("Not Found")
    res.render("editBio",{ id: bio.id, fullName: bio.fullName,gender: bio.gender, address: bio.address });
};


const createBio = async (req, res) => {
  try {
    const { fullName, gender, address } = req.body;
    await Biodata.create({
      userId: req.params.id, 
      gender, 
      fullName, 
      address
    });

    res.redirect("/biodatas");
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message
    })
  }
};

const updateBio = async (req, res) => {
  try {
    const id = await Biodata.findByPk(Number(req.params.id));
    if (!id) return res.send("Not found")

    const { gender, fullname, address } = req.body;
    await id.update({ gender, fullname, address });
    res.redirect("/biodatas");
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message
    })
  };
};

const deleteBio = async (req, res) => {
  try {
    const id = await Biodata.findByPk(Number(req.params.id));
    if (!id) return res.send("Not found")

    await id.destroy();
    res.redirect("/biodatas");
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message
    })
  };
};

module.exports = { getAllBio,createBio, updateBio, deleteBio,getForm ,getFormBio}