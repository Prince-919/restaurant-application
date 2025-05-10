import mongoose from "mongoose";
import config from "./config.js";

const dbConnect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully.");
    });
    mongoose.connection.on("error", (err) => {
      console.error("Error connecting to the database:", err.message);
    });
    mongoose.connect(config.get("databaseUrl"));
  } catch (error) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  }
};
export default dbConnect;
