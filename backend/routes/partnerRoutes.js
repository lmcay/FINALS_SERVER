const express = require("express");
const router = express.Router();
const Partner = require("../models/partnerModel");

// GET all partners
router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new partner
router.post("/", async (req, res) => {
  const newPartner = new Partner(req.body);
  try {
    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    res.status(500).json({ error: "Failed to create partner" });
  }
});

// PUT (update) a partner
router.put("/:id", async (req, res) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
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
    await Partner.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete partner" });
  }
});

module.exports = router;
