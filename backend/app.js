const express = require("express");
const mongoose = require("mongoose");
const partnerRoutes = require("./routes/partnerRoutes");
const machineRoutes = require("./routes/machineRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const path = require("path");

const app = express();
const cors = require("cors");

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors()); // This will allow all origins

// Connect to MongoDB
mongoose
  .connect("", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure the views folder is in the backend directory

// Use routes
app.use("/api/partners", partnerRoutes);
app.use("/api/machines", machineRoutes);
app.use("/api/services", serviceRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Backend
app.get("/", (req, res) => {
  res.render("index");
});

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;
