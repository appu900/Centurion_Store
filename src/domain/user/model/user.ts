import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
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
});

// hash password before saving
userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function compare(password: string) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

userSchema.methods.generateJwt = function generate() {
  return jwt.sign(
    {
      id: this._id,
    },
    "hello world appu from meta",
    {
      expiresIn: "1d",
    }
  );
};

const User = mongoose.model("User", userSchema);
export default User;
