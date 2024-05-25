const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
  isRohan: {
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
  inStockCount: {
    type: String,
  },
  category: {
    type: String,
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

const ProductModal = mongoose.model("product", productSchema);

module.exports = ProductModal;
