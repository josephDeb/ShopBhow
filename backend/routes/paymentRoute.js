import express from "express";
import handler from "../controlers/paymentController.js";

const router = express.Router()

router.post('/', handler)

export default router