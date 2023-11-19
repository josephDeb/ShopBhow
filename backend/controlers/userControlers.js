// Turquoise

import User from '../models/userModels.js'
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtpass = "abc123" || process.env.JWT_SECRET

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, jwtpass, {
    expiresIn: "30d",
  });

  // Set JWT as an HTTP-Only Cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};


const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("User already exists");
  if (userExists) res.status(400).json("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    generateToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      Status: true
    });
  } catch (error) {
    res.status(400).json({Status: false, Error: "Invalid user data"})
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      generateToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
        Status: true,
      });
      return;
    }else {
      res.status(400).json({Status: false, Error: "Wrong credentials"})
    }
  }else {
    res.status(400).json({Status: false, Error: "Wrong credentials"})
  }
});



const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

const getAllUsers = asyncHandler(async (req,res) => {
  const users = await User.find({})
  res.json(users)
})

const getCurrentProfile = asyncHandler(async (req,res) => {
  const user = await User.findById(req.user._id)

  if(user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    })
  }else {
    res.status(404)
    throw new Error("User not found")
  }
})

const updateCurrentProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if(user) {
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email

    if(req.body.password) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      user.password = hashedPassword;
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

const deleteUserById = asyncHandler(async (req, res) => {
    const user = await User.deleteOne(req.params.id)

    if(user) {
        if(user.isAdmin) {
          res.status(400)
          throw new Error("Cannot delete the admin user")
        }

        await User.deleteOne({_id: user._id})
        res.json({message: "User removed"})
    } else {
      res.status(404)
      throw new Error("User not found")
    }

})


const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password")

    if(user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error("User not found")
    }
})


const updateUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(user) {
      user.username = req.body.username || user.username,
      user.email = req.body.email || user.email,
      user.isAdmin = Boolean(req.body.isAdmin)

      const updateUser = await user.save()

      res.json({
        _id: updateUser._id,
        username: updateUser.username,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin
      })
    } else {
      res.status(404)
      throw new Error("User not found")
    }
})

const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
     const { password: hashedPassword, ...rest } = user._doc;
      generateToken(res, user._id).status(200).json(rest);
    } else {
      const generatedPassword =Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const { password: hashedPassword2, ...rest } = newUser._doc;
      generateToken(res, user._id).status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};




export {createUser, loginUser, logoutCurrentUser, getAllUsers, getCurrentProfile, updateCurrentProfile, deleteUserById, getUserById, updateUserById, google}