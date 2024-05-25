const multer = require("multer");
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

module.exports = {
  uploadDocument,
};
