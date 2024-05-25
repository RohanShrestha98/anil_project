const asyncHandler = require("express-async-handler");
const CategoryModal = require("../models/categoryModal");

//@desc add a admin
//@route POST /api/category/add-category
//@access private
const createCategory = asyncHandler(async (req, res) => {
  const { title, description, tags, thumbnail } = req.body;
  if (!title || !description || !tags) {
    res
      .status(400)
      .json({ success: false, messege: "All fields are required" });
  }
  const details = await CategoryModal.create({
  title,
    description,
    tags,
    thumbnail,
    user_id: req?.user?.id??"admin",
  });
  res.status(201).json({ success: true, details });
});

//@desc update a category
//@route PATCh /api/category/:id
//@access private
const updateCategory = asyncHandler(async (req, res) => {
  try {
    const category = await CategoryModal.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }

    category.title = req.body.title ?? category.title;
    category.description = req.body.description ?? category.description;
    category.tags = req.body.tags ?? category.tags;
    category.thumbnail = req.body.thumbnail ?? category.thumbnail;
    const updatedCategory = await category.save();
    res.status(200).json({ success: true, updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@desc delete a category
//@route DELETE /api/category/:id
//@access private
const deleteCategory = asyncHandler(async (req, res) => {
  console.log("req.params.id",req.params.id)
  try {
    const deletedCategory = await CategoryModal.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    res.status(200).json({
      success: true,
      message: "Resource deleted successfully",
      deletedCategory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

const getAllCategory = async (req, res) => {
  try {
    // Fetch all files with their title and description
    const data = await CategoryModal.find(
      {},
      "title description tags thumbnail "
    );
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch files" });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
