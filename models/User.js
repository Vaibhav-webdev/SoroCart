import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
  email: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },

  // Wishlist Products
  wishlist: [
    {
      title: String,
      price: Number,
      rating: Number,
      image: String,
      category: String,
      popular: Boolean,
    }
  ],

  // Orders
  orders: [
    {
      id: String,
      date: String,
      status: String,
      product: String,
      items: Number,
      total: Number,
      image: String
    }
  ]

},
{
  timestamps: true
}
);

export default mongoose.model("User", userSchema);
