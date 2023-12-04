import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function dbconnection() {
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.mongoUrl, params);
    console.log("Database connected Successfully");
  } catch (error) {
    console.error("Error in DB Connection", error);
  }
}
