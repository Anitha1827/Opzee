import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { launcherRouter } from "./Routes/launcher.js";
import { dbconnection } from "./db.js";
import { cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dvmgqasqj",
  api_key: "682689839272153",
  api_secret: "atWho_Q7Gc2FUihXvgYyWZX1dP8",
});
// configure .env
dotenv.config();
let PORT = 5000;

// initializing server
let app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connection
dbconnection();

// routers
app.use("/api", launcherRouter);

// Server connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
