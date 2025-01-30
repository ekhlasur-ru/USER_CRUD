import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      ` !!! MongoDB connected On Host: ${connectionInstance.connection.host}`
        .rainbow
    );
  } catch (error) {
    console.log(`\n MongoDB Connection Failed !!! `, error);
    process.exit(1);
  }
};
export default connectDB;
