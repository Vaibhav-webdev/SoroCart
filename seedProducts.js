import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();   // VERY IMPORTANT
await mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    title: "Men Slim Fit Denim Jacket",
    price: 84,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Men"
  },
  {
    title: "Men Round Neck Cotton T-shirt",
    price: 48,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Men"
  },
  {
    title: "Men Casual Hoodie",
    price: 72,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Men"
  },
  {
    title: "Men Formal White Shirt",
    price: 58,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Men"
  },

  {
    title: "Women Casual Shirt",
    price: 56,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=500&q=80",
    popular: false,
    type: "Women"
  },
  {
    title: "Women Denim Jacket",
    price: 91,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=500&q=80",
    popular: false,
    type: "Women"
  },
  {
    title: "Women Floral Summer Top",
    price: 44,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80",
    popular: false,
    type: "Women"
  },

  {
    title: "Girls Summer Dress",
    price: 39,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    popular: false,
    type: "Kids"
  },
  {
    title: "Kids Cartoon Hoodie",
    price: 35,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Kids"
  },
  {
    title: "Kids School Backpack",
    price: 28,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Kids"
  },

  {
    title: "Men Sports Shoes",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Shoes"
  },
  {
    title: "Women Running Shoes",
    price: 95,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c9c3c4e?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Shoes"
  },

  {
    title: "Women Handbag",
    price: 65,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Bags"
  },
  {
    title: "Leather Travel Backpack",
    price: 110,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506629905607-45e6f7e1d5c0?auto=format&fit=crop&w=500&q=80",
    popular: false,
    type: "Bags"
  },

  {
    title: "Classic Wrist Watch",
    price: 150,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Other"
  },
  {
    title: "Black Sunglasses",
    price: 40,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    popular: true,
    type: "Other"
  }
];


await Product.insertMany(products);

console.log("Products inserted successfully");

process.exit();
