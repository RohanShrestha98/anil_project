const asyncHandler = require("express-async-handler");
const ProductModal = require("../models/productModal");
const CategoryModal = require("../models/categoryModal");

//@desc add a product
//@route POST /api/product/create
//@access private
const createProduct = asyncHandler(async (req, res) => {
  const { name, description,price} = req.body;
  // console.log("req.user.id",req.user.id)

  if (!name || !description || !price) {
    res
      .status(400)
      .json({ success: false,value:req.body, messege: "All fields are required" });
  }
  const details = await ProductModal.create({
    ...req.body,
    user_id: req?.user?.id??"admin",
  });
  res.status(201).json({ success: true, details });
});

//@desc update a product
//@route PATCh /api/product/:id
//@access private
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await ProductModal.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    product.user_id = req?.user?.id??"admin";
    product.name = req.body.name ?? product.name;
    product.description = req.body.description ?? product.description;
    product.categoryField = req.body.categoryField ?? product.categoryField;
    product.category = req.body.category ?? product.category;
    product.discount = req.body.discount ?? product.discount;
    product.price = req.body.price ?? product.price;
    product.isRohan = true;
    product.inStockCount = req.body.inStockCount ?? product.inStockCount;
    product.brand = req.body.brand ?? product.brand;
    product.inStock = req.body.inStock ?? product.inStock;
    product.images = req.body.images ?? product.images;
    const updatedProduct = await product.save();
    res.status(200).json({ success: true, updatedProduct });
  } catch (error) {
    console.log("error",error)
    res.status(500).json({error:error, message: "Server Error" });
  }
});

//@desc delete a product
//@route DELETE /api/product/:id
//@access privat
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const deletedProduct = await ProductModal.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

const getAllProduct = async (req, res) => {
  try {
    // Fetch all files with their title and description
    const data = await ProductModal.find();
    const categoryData = await CategoryModal.find();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};
const getProductByCategory = async (req, res) => {
  const query = req.query.search;
  
  try {
    const data = await ProductModal.find({ category: req.params.id ,title: { $regex: query, $options: 'i' }});
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};


module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
};
