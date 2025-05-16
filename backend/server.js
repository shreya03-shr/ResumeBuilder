require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
const authRoutes = require('./routes/authRoutes')

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ fixed typo here
  })
);

// Connect to MongoDB
connectDB();

app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
//app.use("/api/resume", resumeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // ✅ fixed template string
