const express = require("express");
const router = express.Router();
const Machine = require("../models/machineModel");

router.get("/", async (req, res) => {
  const machines = await Machine.find();
  res.json(machines);
});

// GET a single partner by ID
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

router.post("/", async (req, res) => {
  const newMachine = new Machine(req.body);
  const savedMachine = await newMachine.save();
  res.status(201).json(savedMachine);
});

router.put("/:id", async (req, res) => {
  const updatedMachine = await Machine.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedMachine);
});

router.delete("/:id", async (req, res) => {
  await Machine.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
