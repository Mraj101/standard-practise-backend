import mongoose from "mongoose";
import { dbName } from "./constants.js";


(async () => {
  try {
    await mongoose.connect(`${process.env.CONNECTOIN_URI}`);
  } catch (error) {
    console.log("connection failed: ", error);
    process.exit(1);
  }
})();
