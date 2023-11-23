import express from "express";
import { allCategories, createCategory, removeCategory, singleCategory, updateCategory } from "../controlers/categoryController.js";
import { authorizedAdmin, protect } from "../middlewares/authHandler.js";
const router = express.Router();


router.route("/").post(protect, authorizedAdmin, createCategory)
router.route("/:categoryId").put(protect, authorizedAdmin, updateCategory)
router.route("/:categoryId").delete(protect, authorizedAdmin, removeCategory)
router.route("/categories").get(protect, authorizedAdmin, allCategories)
router.route("/:id").get(protect, authorizedAdmin, singleCategory)
export default router

