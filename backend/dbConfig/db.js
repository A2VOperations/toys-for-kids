import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect("mongodb://localhost:27017/toy_store");
    console.log("Connected to local MongoDB");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

export default dbConnect;