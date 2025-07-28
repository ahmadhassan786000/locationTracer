import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import IPModel from "./ip.model.js";

dotenv.config({ path: './backend/.env' });

console.log("Connecting to DB:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB error:", err.message));

// POST route for logging user info
app.post("/log-ip", async (req, res) => {
  const {
    ip,
    country,
    city,
    isp,
    latitude,
    longitude,
    mapsLink,
    userAgent,
    screenSize,
    language,
    timezone
  } = req.body;

  try {
    const newLog = new IPModel({
      ip,
      country,
      city,
      isp,
      latitude,
      longitude,
      mapsLink,
      userAgent,
      screenSize,
      language,
      timezone
    });

    await newLog.save();

    res.json({ message: "✅ Info logged successfully", ip });
  } catch (err) {
    console.error("❌ Error saving log:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
