import express from "express";
import Product from "../models/Product"
import User from "../models/User"

const router = express.Router();

router.get("/api/wishlist", async (req, res) => {
  try {
    // query se email extract
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // user find karo
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // wishlist send karo
    res.status(200).json(user.wishlist);

  } catch (error) {
    console.error("Wishlist fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/api/orders", async (req, res) => {
  try {
    // query se email extract
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // user find karo
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // wishlist send karo
    res.status(200).json(user.orders);

  } catch (error) {
    console.error("Wishlist fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/create", async (req, res) => {
  try {

    const name = req.query.name;
    const email = req.query.email;
    const avatar = req.query.avatar;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const user = new User({
      email,
      name,
      avatar
    });

    await user.save();

    res.json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/store", async (req, res) => {
  try {
    const filters = {};

    // Category filter
    if (req.query.category) {
  if (req.query.category.toLowerCase() === "all") return;
  filters.category = req.query.category;
}

    // Price range filter
    if (req.query.minPrice || req.query.maxPrice) {
      filters.price = {};
      if (req.query.minPrice) {
        filters.price.$gte = Number(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        filters.price.$lte = Number(req.query.maxPrice);
      }
    }

    let query = Product.find(filters);

    // Sorting
    if (req.query.sort) {
      switch (req.query.sort) {
        case "Price: Low to High":
          query = query.sort({ price: 1 });
          break;
        case "Price: High to Low":
          query = query.sort({ price: -1 });
          break;
        default:
          break; // no sort
      }
    }

    const products = await query;
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/search", async (req, res) => {
  try {
  const search = req.query.search;

  const products = await Product.find({
    title: { $regex: search, $options: "i" }
  });

  res.json(products);

} catch (err) {
  res.status(500).json({ message: err.message });
}
});

router.get("/popular", async (req, res) => {
  const products = await Product.find({ popular: true });
  res.json(products);
});

router.get("/popular/:dynamic", async (req, res) => {
  try {
    const dynamic = req.params.dynamic;
    let products;

    if (dynamic.toLowerCase() === "all") {
      products = await Product.find({ popular: true });
    } else {
      products = await Product.find({
        popular: true,
        category: dynamic, // case-insensitive match
      });
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
