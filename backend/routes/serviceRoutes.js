const express = require("express");
const router = express.Router();
const Service = require("../models/serviceModel");

router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
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

router.post("/", async (req, res) => {
  const newService = new Service(req.body);
  const savedService = await newService.save();
  res.status(201).json(savedService);
});

router.put("/:id", async (req, res) => {
  const updatedService = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedService);
});

router.delete("/:id", async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
