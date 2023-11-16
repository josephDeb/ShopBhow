import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers, getCurrentProfile, updateCurrentProfile } from '../controlers/userControlers.js'
const router = express.Router();

import {protect, authorizedAdmin} from '../middlewares/authHandler.js'

router.route("/").post(createUser).get(protect, authorizedAdmin, getAllUsers)
router.post("/loginUser", loginUser)
router.post("/logoutCurrentUser", logoutCurrentUser)

router.route("/profile").get(protect, getCurrentProfile).put(protect, updateCurrentProfile)

export default router
