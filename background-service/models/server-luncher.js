import mongoose from "mongoose";

const launchSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  icon: {
    type: String,
    trim: true,
    required: true,
  },
  path: {
    type: String,
    trim: true,
    required: true,
  },
  parameters: {
    type: String,
    trim: true,
    required: true,
  },
});

let Launch = mongoose.model("launch", launchSchema);
export { Launch };
