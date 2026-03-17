import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  image: String,
  category: String,
  popular: Boolean,
  desc: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
