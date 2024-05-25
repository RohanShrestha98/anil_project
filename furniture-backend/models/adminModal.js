const mongoose = require("mongoose");

const adminCreateSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "AdminUser",
    },
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    role: {
      type: Number,
      required: [true, "Please add the user role"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AdminUser", adminCreateSchema);
