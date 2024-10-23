const express = require("express");
const router = express.Router();
const Partner = require("../models/partnerModel");
const multer = require("multer");

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage to handle file uploads in memory
const upload = multer({ storage: storage });

// GET all partners
router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET a single partner by ID
router.get("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch partner" });
  }
});

// POST a new partner with image upload
router.post("/", upload.single("image"), async (req, res) => {
  const newPartner = new Partner({
    name: req.body.name,
    description: req.body.description,
    image: req.file ? req.file.originalname : null,
  });

  try {
    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    res.status(500).json({ error: "Failed to create partner" });
  }
});

// PUT (update) a partner by ID
router.put("/:id", upload.single("image"), async (req, res) => {
  const updatedData = {
    name: req.body.name,
    description: req.body.description,
  };

  if (req.file) {
    updatedData.image = req.file.originalname;
  }

  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!updatedPartner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.json(updatedPartner);
  } catch (error) {
    res.status(500).json({ error: "Failed to update partner" });
  }
});

// DELETE a partner
router.delete("/:id", async (req, res) => {
  try {
    const deletedPartner = await Partner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete partner" });
  }
});

module.exports = router;
