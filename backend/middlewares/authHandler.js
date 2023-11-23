import asyncHandler from "./asyncHandler.js";
import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';

const jwtpass = "abc123" || process.env.JWT_SECRET

const protect = (async (req,res, next) => {

    let token;
    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, jwtpass);
            req.user = await User.findById(decoded.userId).select("-password");
            next()
        } catch (error) {
          return  res.status(401).json({Status: false, Error: `Not authorized,token failed ${error}`})
        }
    } else {
       return res.status(401).json({Status: false, Error: "Not authorized, no token"})

    }
})

// admin check auth

const authorizedAdmin = (async (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401).send("No authorized an admin")
    }
})

export {protect, authorizedAdmin}
