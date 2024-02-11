import mongoose from "mongoose";
import { dbName } from "./constants.js";
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  try {
    await mongoose.connect(`${process.env.CONNECTION_URI}/${dbName}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection failed and more: ", error);
    process.exit(1);
  }
})();
