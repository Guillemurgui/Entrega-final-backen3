import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/backend3final");
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error MongoDB", error);
  }
};
