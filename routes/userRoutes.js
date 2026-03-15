import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

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
