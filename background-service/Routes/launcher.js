import express from "express";
import { Launch } from "../models/server-luncher.js";
import { spawn } from "child_process";

let router = express.Router();

// testing api
router.get("/", (req, res) => {
  res.send("Hello, Server Running Successfully");
});

router.post("/addapp", async (req, res) => {
  const { name, path, parameters } = req.body;

  try {
    const newapplication = new Launch({ name, path, parameters });
    await newapplication.save();
    res.json(newapplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

// API to lunch an application
router.post("/app", async (req, res) => {
  const { path, parameters } = req.body;
  if (!path || !parameters) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  try {
    const appProcess = spawn(path, [parameters], {
      detached: true,
      stdio: "ignore",
      shell: true,
    });

    res.status(200).json({ success: "Application launched successfully" });
    appProcess.unref();
  } catch (error) {
    console.error("Error during spawn :", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const launcherRouter = router;
