const express = require("express");
const router = express.Router();
const Machine = require("../models/machineModel");

router.get("/", async (req, res) => {
  const machines = await Machine.find();
  res.json(machines);
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
