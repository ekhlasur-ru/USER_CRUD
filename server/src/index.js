import dotenv from "dotenv";
import colors from "colors";
import connectDB from "../src/config/database.js";
import { app } from "./app.js";
import multer from "multer";
import mongoose from "mongoose";
colors.enable(); //console colore config 2nd option:(enable/disable)
dotenv.config({
  path: "./.env", // dotenv.config(); // Load environment variables from .env file
});
connectDB(); //database Connection
const PORT = process.env.PORT || 3005; //API CONFIGRARATION
//APP LISTENER
app.listen(PORT, () => {
  console.log(`\n !!! Express Server Running On PORT: ${PORT}`.rainbow);
});
app.get("/", (req, res) => {
  res.render("index"); //EJS Dashboard Show
});
app.get("/about", (req, res) => {
  res.render("about"); //EJS Dashboard Show
});
////////////////
const profileSchema = new mongoose.Schema({
  name: String,
  address: String,
  image: String,
});
const Profile = mongoose.model("Profile", profileSchema);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
app.post("/api/profile", upload.single("image"), async (req, res) => {
  try {
    const newProfile = new Profile({
      name: req.body.name,
      address: req.body.address,
      image: req.file.path,
    });
    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/profile/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
