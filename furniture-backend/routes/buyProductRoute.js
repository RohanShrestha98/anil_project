const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const {
  createBuyProduct,
  getAllBuyProduct,
  updateBuyProduct,
  deleteBuyProduct,
} = require("../controllers/buyProductController");

router.route("/list").get(getAllBuyProduct);
router.route("/create").post(createBuyProduct);
router.route("/update/:id").patch(updateBuyProduct);
router.route("/delete/:id").delete(deleteBuyProduct);
router.use(createUserValidateToken);

module.exports = router;
