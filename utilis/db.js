import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    let connection;
    connection = await mongoose.connect(process.env.MONGODB_URI);

    if (connection) {
      console.log("MongoDB Connected Successfully");
    } else {
      console.log("Something Went Wrong to Connect DB");
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
