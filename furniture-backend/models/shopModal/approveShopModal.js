const mongoose = require("mongoose");

const approveShopSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shop_name: {
      type: String,
      required: [true, "Please enter your shop name"],
    },
    location: {
      type: String,
      required: [true, "Please enter your shop location"],
    },
    citizenship: {
      type: String,
      required: [true, "Please attach your citizenship"],
    },
    isApprove: {
      type: Boolean,
      required: [true, "Please attach your citizenship"],
    },
    vat_number: {
      type: Number,
      required: [true, "Please enter your shop VAT number"],
    },
    pat_number: {
      type: Number,
      required: [true, "Please enter your shop PAT number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ApproveShop", approveShopSchema);
