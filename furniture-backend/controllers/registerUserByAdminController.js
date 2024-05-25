const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/adminModal");
const FileModel = require("../models/fileModal");
const multer = require("multer");
//@desc Get all admins
//@route GET /api/admins
//@access private
const getAdminBySuperAdmin = asyncHandler(async (req, res) => {
  const adminBySuperAdmin = await AdminUser.find({ user_id: req.user.id });
  const adminData = [];
  adminBySuperAdmin?.map((item) => {
    return adminData.push({
      email: item?.email,
      createdAt: item?.createdAt,
      role: item?.role,
      updatedAt: item?.updatedAt,
      username: item?.username,
      idx: item?._id,
    });
  });
  res.status(200).json(adminData);
});

//@desc Register a admin
//@route POST /api/admin/register
//@access private
const registerAdmin = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await AdminUser.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await AdminUser.create({
    username,
    email,
    role,
    password: hashedPassword,
    user_id: req.user.id,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      role: user.role,
      success: true,
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the admin" });
});
//@desc update a admin
//@route PATCh /api/admins/document/:id
//@access private
const updateAdmin = asyncHandler(async (req, res) => {
  try {
    const document = await FileModel.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ message: "Document Not Found" });
    }

    document.title = req.body.title || document.title;
    document.description = req.body.description || document.description;

    const updatedDocument = await document.save();

    res.json(updatedDocument);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@desc delete a admin
//@route DELETE /api/admins/document/:id
//@access private
const deleteAdmin = asyncHandler(async (req, res) => {
  try {
    const deletedFile = await FileModel.findByIdAndDelete(req.params.id);
    if (!deletedFile) {
      return res
        .status(404)
        .json({ success: false, message: "Resource not found" });
    }
    res.status(200).json({
      success: true,
      message: "Resource deleted successfully",
      deletedFile,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep original filename
  },
});

const upload = multer({ storage: storage });

const uploadDocument = upload.single("file");

const getAllFiles = async (req, res) => {
  try {
    // Fetch all files with their title and description
    const files = await FileModel.find({}, "title description filePath");
    console.log("files", files);
    res.status(200).json({ success: true, files });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};

module.exports = {
  registerAdmin,
  getAdminBySuperAdmin,
  uploadDocument,
  getAllFiles,
  updateAdmin,
  deleteAdmin,
};
