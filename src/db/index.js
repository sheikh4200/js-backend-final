import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    // console.log(connectionInstance)
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
   
    process.exit(1);
  }
};

export default connectDB;
