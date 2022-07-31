const {Biodata} = require("../../models");

const getAllBio = async (req, res) => {
  try {
    const bio = await Biodata.findAll();
    res.status(200).send({
      status: "OK",
      message: "Successfull",
      data: bio
    }); 
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: error.message
    })
  }
};

const getOneBio = async (req, res) => {
  try {
    const id = await Biodata.findOne({
      where:{
        userId:req.params.id
      }
    });
    if (!id) return res.status(404).send({
      status: "Fail",
      message: "data not found"
    })
    res.status(200).send({
      status: "OK",
      message: "get user successfull",
      data: id
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message
    })
  };
};

const createBio = async (req, res) => {
  try {
    const { userId, fullName, gender, address } = req.body;
    const bio = await Biodata.create({
      userId, 
      gender, 
      fullName, 
      address
    });

    res.status(200).send({
      status: "OK",
      message: "Add Biodata successfull",
      data: bio
    })
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

    const { gender, fullName, address } = req.body;
    await id.update({ gender, fullName, address });
    res.status(200).send({
      status: "OK",
      message: "update Biodata successfull",
      data: id
    });
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
    res.status(200).send({
      status: "OK",
      message: "delete Biodata successfull",
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message
    })
  };
};

module.exports = { getAllBio, getOneBio, createBio, updateBio, deleteBio }