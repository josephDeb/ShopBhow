import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers, getCurrentProfile, updateCurrentProfile, deleteUserById, getUserById, updateUserById, google } from '../controlers/userControlers.js'

const router = express.Router();


import {protect, authorizedAdmin} from '../middlewares/authHandler.js'
// user route
router.post("/test", createUser)
router.post("/signup", createUser)
router.post("/google", google)
// http://localhost:8088/api/users/auth
router.post("/auth", loginUser)
// http://localhost:8088/api/users/logoutCurrentUser
router.post("/logoutCurrentUser", logoutCurrentUser)

// admin route
router.route("/profile").get(protect, getCurrentProfile).put(protect, updateCurrentProfile)
router.route("/:id").delete(protect, authorizedAdmin, deleteUserById).get(protect, authorizedAdmin, getUserById).put(protect, authorizedAdmin, updateUserById)

export default router
