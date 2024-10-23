const express = require("express");
const router = express.Router();
const Service = require("../models/serviceModel");

router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
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
