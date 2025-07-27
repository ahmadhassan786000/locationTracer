import mongoose from "mongoose";

const ipSchema = new mongoose.Schema({
  ip: String,
  country: String,
  city: String,
  isp: String,
  latitude: Number,
  longitude: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const IPModel = mongoose.model("IPLog", ipSchema);
export default IPModel;
