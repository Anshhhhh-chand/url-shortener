const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/url");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.use("/api/url", urlRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/url-shortener")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB connection error:", err));

app.get("/", (req, res) => {
  res.send("URL Shortener API is running");
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
