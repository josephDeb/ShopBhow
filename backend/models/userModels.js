
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
        type: String,
        required: [true, "Please add a username"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please enter valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
        // maxLength: [28, "Password must be 28 characters or lower"]
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    profilePhoto: {
      type: Boolean,
      default: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;