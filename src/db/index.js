import {mongoose} from "mongoose";
import dbName from "../db/index.js"
import dotenv from "dotenv";
dotenv.config({path:"./env"});

const DbConnect=async ()=> {

      try {
    let connectionInstance = await mongoose.connect(`${process.env.CONNECTION_URI}/${dbName}`);
    console.log("Connected to MongoDB, !! HOST:",connectionInstance.connection.host);
  } catch (error) {
    console.log("Connection failed and more: ", error);
    process.exit(1);
  }

}

export default DbConnect