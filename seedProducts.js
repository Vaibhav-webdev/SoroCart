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
    category: "men",
    popular: true,
    desc: "Premium slim fit denim jacket made with durable cotton blend fabric. Perfect for casual outings and layering in cool weather."
  },
  {
    title: "Men Round Neck Cotton T-shirt",
    price: 48,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
    category: "men",
    popular: true,
    desc: "Soft breathable cotton t-shirt with a classic round neck design. Ideal for everyday comfort and casual style."
  },
  {
    title: "Men Casual Hoodie",
    price: 72,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=80",
    category: "men",
    popular: true,
    desc: "Comfortable fleece hoodie designed for warmth and relaxed street style. Features a soft inner lining and adjustable hood."
  },
  {
    title: "Men Formal White Shirt",
    price: 58,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&q=80",
    category: "men",
    popular: true,
    desc: "Elegant formal white shirt crafted with high quality cotton fabric. Perfect for office wear and formal occasions."
  },

  {
    title: "Women Casual Shirt",
    price: 56,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=500&q=80",
    category: "women",
    popular: true,
    desc: "Stylish casual shirt designed with lightweight fabric for everyday comfort. Perfect for a relaxed and modern look."
  },
  {
    title: "Women Denim Jacket",
    price: 91,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=500&q=80",
    category: "women",
    popular: false,
    desc: "Trendy women's denim jacket featuring a classic design and durable stitching. Great for layering with any outfit."
  },
  {
    title: "Women Floral Summer Top",
    price: 44,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80",
    category: "women",
    popular: false,
    desc: "Lightweight floral top designed for summer comfort. Soft breathable fabric with a stylish feminine pattern."
  },

  {
    title: "Girls Summer Dress",
    price: 39,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    category: "kids",
    popular: false,
    desc: "Adorable summer dress for girls made from soft breathable fabric. Designed for comfort and playful style."
  },
  {
    title: "Kids Cartoon Hoodie",
    price: 35,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
    category: "kids",
    popular: true,
    desc: "Fun cartoon themed hoodie for kids with soft fleece material. Perfect for casual wear and chilly weather."
  },
  {
    title: "Kids School Backpack",
    price: 28,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=500&q=80",
    category: "kids",
    popular: true,
    desc: "Durable and lightweight school backpack with spacious compartments. Designed for daily school essentials."
  },

  {
    title: "Men Sports Shoes",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    category: "shoes",
    popular: true,
    desc: "High performance sports shoes built for comfort and stability. Ideal for running, training, and everyday wear."
  },
  {
    title: "Women Running Shoes",
    price: 95,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c9c3c4e?auto=format&fit=crop&w=500&q=80",
    category: "shoes",
    popular: true,
    desc: "Lightweight running shoes designed for flexibility and support. Perfect for jogging, workouts, and active lifestyles."
  },

  {
    title: "Women Handbag",
    price: 65,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80",
    category: "bags",
    popular: true,
    desc: "Elegant women's handbag with spacious compartments and premium finish. Ideal for daily use and fashion styling."
  },
  {
    title: "Leather Travel Backpack",
    price: 110,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506629905607-45e6f7e1d5c0?auto=format&fit=crop&w=500&q=80",
    category: "bags",
    popular: false,
    desc: "Premium leather travel backpack designed for durability and style. Perfect for travel, work, and everyday carry."
  },

  {
    title: "Classic Wrist Watch",
    price: 150,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    category: "other",
    popular: true,
    desc: "Classic wrist watch with a timeless design and premium finish. Suitable for both casual and formal occasions."
  },
  {
    title: "Black Sunglasses",
    price: 40,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    category: "other",
    popular: true,
    desc: "Stylish black sunglasses with UV protection lenses. Perfect accessory for sunny days and outdoor fashion."
  }
];


await Product.insertMany(products);

console.log("Products inserted successfully");

process.exit();
