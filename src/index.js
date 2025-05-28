// require('dotenv').config()

import dotenv from 'dotenv';
import express from "express";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
    path: './.env',
})

connectDB()


export default app;










/*(async()=>{
    try {
        await  mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)        
        app.on("error",()=>{
            console.log("Error to connect to database");
        })
        app.listen(process.env.PORT || 5000,()=>{
            console.log("Server is running on port");
        })
    } catch (error) {
    console.error("failed to connect to database");
throw Error        
    }
})()
    */