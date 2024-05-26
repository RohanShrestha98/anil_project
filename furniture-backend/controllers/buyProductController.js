const asyncHandler = require("express-async-handler");
const BuyProductModal = require("../models/buyProductModal");

//@desc add a product
//@route POST /api/product/create
//@access private
const createBuyProduct = asyncHandler(async (req, res) => {
  const { name, description,price} = req.body;
  console.log("req.user.id",req.user.id)

  if (!name || !description || !price) {
    res
      .status(400)
      .json({ success: false,value:req.body, messege: "All fields are required" });
  }
  try{
    const details = await BuyProductModal.create({
      ...req.body,
      isAnil:true,
      user_id: req?.user?.id ?? "user",
    });
    res.status(201).json({ success: true, details });
  }catch(err){
    console.log("err",err)
    res
      .status(400)
      .json({ success: false, messege: "You has just ordered this product" });
  }
  
});

//@desc update a product
//@route PATCh /api/product/:id
//@access private
const updateBuyProduct = asyncHandler(async (req, res) => {
  console.log("res",res)
  try {
    const product = await BuyProductModal.findById(req.params.id);

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
    product.brand = req.body.brand ?? product.brand;
    product.isAnil = req.body.isRohan ?? product.isAnil;
    product.status = req.body.status ?? product.status;
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
const deleteBuyProduct = asyncHandler(async (req, res) => {
  try {
    const deletedProduct = await BuyProductModal.findByIdAndDelete(
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

const getAllBuyProduct = async (req, res) => {
  try {
    // Fetch all files with their title and description
    const data = await BuyProductModal.find({ isAnil: true  });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};
const getAllTrackOrder = async (req, res) => {
  try {
    const data = await BuyProductModal.find({ status: "Delivered"  });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};


const getAllBuyProductByUser = async (req, res) => {
  try {
    const data = await BuyProductModal.find({ user_id: req.user.id });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};

module.exports = {
  getAllBuyProduct,
  createBuyProduct,
  updateBuyProduct,
  deleteBuyProduct,
  getAllTrackOrder,
  getAllBuyProductByUser,
};
