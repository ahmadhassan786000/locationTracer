import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import IPModel from "./ip.model.js";

dotenv.config({ path: './backend/.env' });


console.log("Connecting to DB:", process.env.MONGO_URI);  // ✅ debug log

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ DB error:", err.message));

app.post("/log-ip", async (req, res) => {
  const { ip, country, city, isp, latitude, longitude } = req.body;

  const newLog = new IPModel({ ip, country, city, isp, latitude, longitude });
  await newLog.save();

  res.json({ message: "IP and location logged", ip });
});


app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
