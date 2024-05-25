const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const {
  registerAdmin,
  getAdminBySuperAdmin,
  uploadDocument,
  getAllFiles,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/registerUserByAdminController");
const FileModel = require("../models/fileModal");

router.use(createUserValidateToken);
router.route("/document").post(uploadDocument, async (req, res) => {
  console.log("req", req.body);
  const { title, description } = req.body;
  if (!title || !description || req.file === undefined) {
    res
      .status(400)
      .json({ success: false, messege: "All fields are required" });
  }
  const details = await FileModel.create({
    title,
    description,
    fileName: req?.file?.originalname,
    filePath: req?.file?.path,
    user_id: req.user.id,
  });
  res.status(201).json({ success: true, details });
});
router.route("/register").post(registerAdmin);
router.route("/all-files").get(getAllFiles);
router.route("/document/:id").patch(updateAdmin);
router.route("/document/:id").delete(deleteAdmin);
router.route("/").get(getAdminBySuperAdmin);

module.exports = router;
