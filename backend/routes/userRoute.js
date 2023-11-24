import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers,deleteUserById, getUserById, updateUserById, getCurrentUserProfile, updateCurrentUserProfile, google } from '../controlers/userControlers.js'

const router = express.Router();


import {protect, authorizedAdmin} from '../middlewares/authHandler.js'

// user route
router.post("/create", createUser)

router.post("/google", google)
// http://localhost:8088/api/users/auth
router.post("/auth", loginUser)
// http://localhost:8088/api/users/logoutCurrentUser
router.post("/logout", logoutCurrentUser)

// admin route
router.route("/").get(protect, authorizedAdmin, getAllUsers)
router.route("/profile").get(protect, getCurrentUserProfile).put(protect, updateCurrentUserProfile)
router.route("/:id").delete(protect, authorizedAdmin, deleteUserById).get(protect, authorizedAdmin, getUserById).put(protect, authorizedAdmin, updateUserById)



export default router
