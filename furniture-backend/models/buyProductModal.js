const mongoose = require("mongoose");

const buyProductSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
  },
  isAnil: {
    type: Boolean,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
  },
  count: {
    type: String,
  },  
  color: {
    type: String,
  },
  status: {
    type: String,
  },
  category: {
    type: String,
  },
  userDetails: {
    type: Array,
  },
  categoryField: {
    type: Array,
  },
  images: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Other fields as per your requirements
});

const BuyProductModal = mongoose.model("buyproduct", buyProductSchema);

module.exports = BuyProductModal;
