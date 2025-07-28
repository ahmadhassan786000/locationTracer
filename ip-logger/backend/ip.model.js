import mongoose from "mongoose";

const ipSchema = new mongoose.Schema({
  ip: String,
  country: String,
  city: String,
  isp: String,
  latitude: Number,
  longitude: Number,
  mapsLink: String,
  userAgent: String,
  screenSize: String,
  language: String,
  timezone: String,
}, { timestamps: true });

const IPModel = mongoose.model("IPLog", ipSchema);

export default IPModel;
