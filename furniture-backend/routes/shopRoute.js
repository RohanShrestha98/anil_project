const express = require("express");
const router = express.Router();
const {
  getShopDetail,
  getAllShops,
  applyApproveShop,
  approveShop,
  deleteShop,
} = require("../controllers/shopController/approveShopController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getAllShops);
router.route("/approve").post(applyApproveShop);
router.route("/approve/:id").put(approveShop).delete(deleteShop);
router.route("/:id").get(getShopDetail);

module.exports = router;
