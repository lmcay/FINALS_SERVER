const express = require("express");
const router = express.Router();
const Machine = require("../models/machineModel");
const multer = require("multer");

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage to handle file uploads in memory
const upload = multer({ storage: storage });

// GET all machines
router.get("/", async (req, res) => {
  try {
    const machines = await Machine.find();
    res.json(machines);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch machines" });
  }
});

// GET a single machine by ID
router.get("/:id", async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id);
    if (!machine) {
      return res.status(404).json({ message: "Machine not found" });
    }
    res.json(machine);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch machine" });
  }
});

// POST a new machine with image upload
router.post("/", upload.single("image"), async (req, res) => {
  const newMachine = new Machine({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    image: req.file ? req.file.originalname : null,
  });

  try {
    const savedMachine = await newMachine.save();
    res.status(201).json(savedMachine);
  } catch (error) {
    res.status(500).json({ error: "Failed to create machine" });
  }
});

// PUT (update) a machine by ID
router.put("/:id", upload.single("image"), async (req, res) => {
  const updatedData = {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
  };

  if (req.file) {
    updatedData.image = req.file.originalname;
  }

  try {
    const updatedMachine = await Machine.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!updatedMachine) {
      return res.status(404).json({ message: "Machine not found" });
    }
    res.json(updatedMachine);
  } catch (error) {
    res.status(500).json({ error: "Failed to update machine" });
  }
});

// DELETE a machine by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedMachine = await Machine.findByIdAndDelete(req.params.id);
    if (!deletedMachine) {
      return res.status(404).json({ message: "Machine not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete machine" });
  }
});

module.exports = router;
