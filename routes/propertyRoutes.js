const express = require("express");
const Property = require("../models/property");
const router = express.Router();

// Add property
router.post("/", async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.json(property);
});

// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

module.exports = router;