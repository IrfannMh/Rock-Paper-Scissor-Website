const express = require("express");
const router = express.Router();
const bioController = require("../controllers/restclient/BiodataController");

router.get("/", bioController.getAllBio);
router.post("/", bioController.createBio);
router.post("/:id", bioController.updateBio);
router.delete("/:id", bioController.deleteBio);
router.get("/:id", bioController.getOneBio);


module.exports = router;