import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/store", async (req, res) => {
  try {
    const filters = {};

    if (req.query.category) {
      filters.category = req.query.category;
    }

    if (req.query.brand) {
      filters.brand = req.query.brand;
    }

    if (req.query.price) {
      filters.price = req.query.price;
    }

    const products = await Product.find(filters);

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
  const dynamic = req.params.dynamic;

  const products = await Product.find({
    popular: true,
    type: dynamic
  });

  res.json(products);
});


export default router;
