import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  image: String,
  popular: Boolean,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
