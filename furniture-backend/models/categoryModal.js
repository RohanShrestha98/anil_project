const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  user_id: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
    // ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  thumbnail: {
    type: Object,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Other fields as per your requirements
});

const CategoryModal = mongoose.model("category", categorySchema);

module.exports = CategoryModal;
