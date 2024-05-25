const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const { uploadDocument } = require("../controllers/fileUploadController");
const FileUploadModal = require("../models/fileUploadModal");

// router.use(createUserValidateToken);
router.route("/upload").post(uploadDocument, async (req, res) => {
  console.log("hello",req)
  const details = await FileUploadModal.create({
    fileName: req?.file?.originalname,
    url: `http://localhost:5001/${req?.file?.path}`,
    user_id: req?.user?.id??"admin",
  });
  res.status(201).json({ success: true, details });
});

module.exports = router;
