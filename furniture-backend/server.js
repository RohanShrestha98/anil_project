const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandeler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

require("dotenv").config();
var cors = require("cors");
connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/product", require("./routes/productRoute"));
app.use("/api/buy-product", require("./routes/buyProductRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/admins", require("./routes/adminRoute"));
app.use("/api/category", require("./routes/categoryRoute"));
app.use("/api/file", require("./routes/fileUploadRoute"));
app.use("/api/shop", require("./routes/shopRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
