import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers,deleteUserById, getUserById, updateUserById, getCurrentUserProfile, updateCurrentUserProfile,signout } from '../controlers/userControlers.js'

const router = express.Router();


import {protect, authorizedAdmin} from '../middlewares/authHandler.js'

// user route
router.post("/create",createUser)


// http://localhost:8088/api/users/auth
router.post("/auth", loginUser)
// http://localhost:8088/api/users/logoutCurrentUser
router.post("/logout", logoutCurrentUser)

// admin route
router.route("/users").get( getAllUsers)
router.route("/").get(protect, getCurrentUserProfile)
router.route("/profile:id").put(protect, updateCurrentUserProfile)
router.route("/:id").delete( deleteUserById).get( getUserById).put( updateUserById)
router.route("/signout").post(signout)



export default router
