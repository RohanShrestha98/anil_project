// FileModel.js or fileSchema.js

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  user_id: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    required: true,
    // ref: "User",
  },
  url: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Other fields as per your requirements
});

const FileUploadModal = mongoose.model("FileUpload", fileSchema);

module.exports = FileUploadModal;
