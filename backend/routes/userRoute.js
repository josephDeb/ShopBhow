import express from "express";
import { createUser } from '../controlers/userControlers.js'
const router = express.Router();

router.post("/", createUser)


export default router
