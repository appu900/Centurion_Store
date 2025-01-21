import mongoose from "mongoose";

const centerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Center name is required"],
  },
  description: {
    type: String,
    required: [true, "Center description is required"],
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const center = mongoose.model("Center", centerSchema);
export default center;
