import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Admin name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePicture: {
      type: String,
      default: "https://www.gravatar.com/avatar/",
    },
    center: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Center",
    },
  },
  { timestamps: true }
);

const admin = mongoose.model("Admin", adminSchema);
export default admin;
