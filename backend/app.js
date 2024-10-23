const express = require("express");
const mongoose = require("mongoose");
const partnerRoutes = require("./routes/partnerRoutes");
const machineRoutes = require("./routes/machineRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const cors = require("cors");

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors()); // This will allow all origins

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://lmctest1:l7s1bP7u04qgX6Rx@cluster0.u4pev.mongodb.net/medTechDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Use routes
app.use("/api/partners", partnerRoutes);
app.use("/api/machines", machineRoutes);
app.use("/api/services", serviceRoutes);

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;
