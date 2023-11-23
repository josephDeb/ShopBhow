import express from "express";
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors'
import userRoute from '../backend/routes/userRoute.js'
import categoryRoute from '../backend/routes/categoryRoute.js'
 //utils
 import connectDB from './config/db.js'

 dotenv.config();
 const port = process.env.PORT || 8088;

 connectDB()
 
 const app = express()

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cookieParser())
 app.use(cors(
  {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
  }
));

 app.get("/", (req, res) => {
   res.send("BACKEND RUNNING")
 })


 
 app.use("/api/users", userRoute)
 app.use("/api/category", categoryRoute)

 app.listen(port, () => {
    console.log("SERVER RUNNING ON PORT")
 })