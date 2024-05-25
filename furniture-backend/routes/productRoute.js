const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
} = require("../controllers/productController");

router.route("/list").get(getAllProduct);
router.route("/create").post(createProduct);
router.route("/update/:id").patch(updateProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/list/:id").get(getProductByCategory);
router.use(createUserValidateToken);

module.exports = router;
