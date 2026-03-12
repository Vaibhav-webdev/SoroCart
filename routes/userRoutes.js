import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
  console.log(products);
});

router.get("/popular", async (req, res) => {
  const products = await Product.find({ popular: true });
  res.json(products);
  console.log(products);
});

export default router;
