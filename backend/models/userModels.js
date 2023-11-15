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
        role: {
            type: String,
            required: [true, String],
            default: "admin",
            enum: ["customer", "admin"]
        },
        photo: {
            type: String,
            required: [true, "Please add a photo"],
            default: "https://images.unsplash.com/photo-1699817361440-95aab3ddd170?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        phone: {
            type: String,
            default: "093235"
        },
        address: {
            type: Object,
            // address, state, country
        }
    }
)

const User = mongoose.model("User", userSchema)

export default User;