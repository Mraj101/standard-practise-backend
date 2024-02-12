import mongoose from "mongoose";
import { dbName } from "./constants.js";
import dotenv from "dotenv";
import DbConnect from "./db/index.js";
import {app} from './app.js'
dotenv.config();

DbConnect().then(()=>{
    app.listen(process.env.PORT||5000,()=>{
        console.log(`app listening on port: ${process.env.PORT} `);
        app.on("error",(error)=>{
            console.log("err:",error);
            throw Error;
        })
    })
})
.catch(error=>{
    console.log('mongo db connection failed !!, ',error)
})

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.CONNECTION_URI}/${dbName}`);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Connection failed and more: ", error);
//     process.exit(1);
//   }
// })();
