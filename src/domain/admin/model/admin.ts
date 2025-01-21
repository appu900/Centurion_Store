import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    centerName: {
      type: String,
      required: [true, "Center name is required"],
    },
  },
  { timestamps: true }
);

adminSchema.pre("save", function (next) {
  const admin = this;
  const SALT = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(admin.password, SALT);
  admin.password = hashedPassword;
  next();
});

adminSchema.methods.comparePassword = function compare(
  userInputPassword: string
) {
  return bcrypt.compareSync(userInputPassword, this.password);
};

adminSchema.methods.generateJwt = function generate() {
  return jwt.sign(
    {
      id: this._id,
    },
    "hello world",
    { expiresIn: "1d" }
  );
};

const admin = mongoose.model("Admin", adminSchema);
export default admin;
