const express = require("express");
const router = express.Router();
const Service = require("../models/serviceModel");
const multer = require("multer");

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage to handle file uploads in memory
const upload = multer({ storage: storage });

// GET all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// GET a single service by ID
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service" });
  }
});

// POST a new service with image upload (only saving the filename)
router.post("/", upload.single("image"), async (req, res) => {
  const newService = new Service({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.file ? req.file.originalname : null,
  });

  try {
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ error: "Failed to create service" });
  }
});

// PUT (update) a service by ID
router.put("/:id", upload.single("image"), async (req, res) => {
  const updatedData = {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
  };

  // Only update the image name if a new one is provided
  if (req.file) {
    updatedData.image = req.file.originalname;
  }

  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ error: "Failed to update service" });
  }
});

// DELETE a service by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete service" });
  }
});

module.exports = router;
