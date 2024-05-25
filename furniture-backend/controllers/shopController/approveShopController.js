const asyncHandler = require("express-async-handler");
const ApproveShop = require("../../models/shopModal/approveShopModal");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getAllShops = asyncHandler(async (req, res) => {
  const approvedShops = await ApproveShop.find();
  res.status(200).json(approvedShops);
});

//@desc apply shop to approve
//@route POST /api/shop/approve
//@access private
const applyApproveShop = asyncHandler(async (req, res) => {
  const {
    shop_name,
    location,
    citizenship,
    phone,
    isApprove,
    vat_number,
    pat_number,
  } = req.body;
  console.log(" req.body", req.body);
  if (!shop_name || !location || !citizenship || !vat_number || !pat_number) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  console.log(" req.user", req.user);
  const shopDetails = await ApproveShop.create({
    shop_name,
    location,
    phone,
    isApprove,
    citizenship,
    vat_number,
    pat_number,
    user_id: req.user.id,
  });
  res.status(201).json(shopDetails);
});

//@desc Get shop
//@route GET /api/shop/:id
//@access private
const getShopDetail = asyncHandler(async (req, res) => {
  const shop = await ApproveShop.findById(req.params.id);
  if (!shop) {
    res.status(404);
    throw new Error("Shop not found");
  }
  res.status(200).json(shop);
});

//@desc Update shop
//@route PUT /api/shop/:id
//@access private
const approveShop = asyncHandler(async (req, res) => {
  const shop = await ApproveShop.findById(req.params.id);
  console.log("object  req.body", req.body);
  if (!shop) {
    res.status(404);
    throw new Error("Shop not found");
  }

  if (shop.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update shop");
  }

  const updatedShop = await ApproveShop.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedShop);
});

// const approveShop = asyncHandler(async (req, res) => {
//   console.log("req", req.params.id);
//   try {
//     const shop = await ApproveShop.findById(req.params.id);

//     if (!shop) {
//       return res.status(404).json({ message: "shop Not Found" });
//     }

//     shop.isApprove = true;

//     const approveShop = await shop.save();

//     res.json(approveShop);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });
//@desc Delete shop
//@route DELETE /api/shop/:id
//@access private
const deleteShop = asyncHandler(async (req, res) => {
  const shop = await ApproveShop.findById(req.params.id);
  if (!shop) {
    res.status(404);
    throw new Error("Shop not found");
  }
  if (shop.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update shop");
  }
  await ApproveShop.deleteOne({ _id: req.params.id });
  res.status(200).json(shop);
});

module.exports = {
  getAllShops,
  applyApproveShop,
  getShopDetail,
  approveShop,
  deleteShop,
};
