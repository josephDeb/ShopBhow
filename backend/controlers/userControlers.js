import User from '../models/userModels.js'
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


const jwtpass = process.env.JWT_SECRET_KEY || "abc123"

const generateToken = (id) => {
    return jwt.sign({id}, jwtpass,
        {expiresIn: "1d"}
    )
}


const createUser = asyncHandler(async (req, res) => {
    

    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      throw new Error("Please fill all the inputs.");
    }
  
    const userExists = await User.findOne({ email });
    if (userExists) res.status(400).send("User already exists");
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
  
    const token = generateToken(newUser._id)

    if(newUser) {
        const {_id, username, email, role } = newUser
        res.cookie("token", token, {
            path: '/',
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // sameSite: none,
        })
        res.status(201).json({
            _id,username,email,role,token
        })
    } else {
        res.status(400)
        throw new Error("Invalid data error create user")
    }
  });


export {createUser}