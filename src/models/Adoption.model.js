import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  petName: {
    type: String,
    required: true
  },
  adoptedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Adoptions", adoptionSchema);

