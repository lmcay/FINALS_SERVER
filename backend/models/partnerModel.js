const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL or path to the image
});

const Partner = mongoose.model("Partner", partnerSchema);
module.exports = Partner;
