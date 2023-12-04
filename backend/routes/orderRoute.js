import express from "express";

const router = express.Router()

import { protect, authorizedAdmin } from "../middlewares/authHandler.js";
import { createOrder } from "../controlers/OrderController.js";

router.route("/checkout").post(protect, authorizedAdmin, createOrder)

export default router