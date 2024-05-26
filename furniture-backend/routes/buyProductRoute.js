const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const {
  createBuyProduct,
  getAllBuyProduct,
  updateBuyProduct,
  getAllTrackOrder,
  deleteBuyProduct,
  getAllBuyProductByUser,
} = require("../controllers/buyProductController");

router.route("/list").get(getAllBuyProduct);
router.route("/track-order/list").get(getAllTrackOrder);
router.route("/update/:id").patch(updateBuyProduct);
router.use(createUserValidateToken);
router.route("/create").post(createBuyProduct);
router.route("/delete/:id").delete(deleteBuyProduct);
router.route("/track-order").get(getAllBuyProductByUser);

module.exports = router;
