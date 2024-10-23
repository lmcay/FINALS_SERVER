const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
