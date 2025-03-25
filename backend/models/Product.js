const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  amazonLink: String,
  flipkartLink: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

