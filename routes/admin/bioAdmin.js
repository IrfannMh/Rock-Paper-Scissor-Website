const express = require("express");
const router = express.Router();
const bioController = require("../../controllers/admin/BiodataController");

router.get("/", bioController.getAllBio);
router.get("/create/:id", bioController.getForm);
router.post("/create/:id", bioController.createBio);
router.get("/:id/edit", bioController.getFormBio);
router.post("/:id/edit", bioController.updateBio);
router.get("/:id/delete", bioController.deleteBio);

module.exports = router;