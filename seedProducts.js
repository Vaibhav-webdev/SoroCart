import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();   // VERY IMPORTANT
await mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    title: "Men Slim Fit Relaxed Denim Jacket",
    price: 84,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    popular: true
  },
  {
    title: "Men Round Neck Pure Cotton T-shirt",
    price: 48,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    popular: true
  },
  {
    title: "Women Casual Shirt",
    price: 56,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
    popular: false
  },
  {
    title: "Girls Summer Dress",
    price: 39,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    popular: false
  },
  {
    title: "Men Casual Hoodie",
    price: 72,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    popular: true
  },
  {
    title: "Women Denim Jacket",
    price: 91,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985",
    popular: false
  },
  {
    title: "Men Sports Shoes",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    popular: true
  },
  {
    title: "Women Handbag",
    price: 65,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e",
    popular: true
  },

  // New Products
  {
    title: "Men Formal White Shirt",
    price: 58,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    popular: true
  },
  {
    title: "Women Floral Summer Top",
    price: 44,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    popular: false
  }
];


await Product.insertMany(products);

console.log("Products inserted successfully");

process.exit();
