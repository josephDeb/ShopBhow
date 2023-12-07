import express from "express";
import { allCategories, createCategory, removeCategory, singleCategory, updateCategory } from "../controlers/categoryController.js";
import { authorizedAdmin, protect } from "../middlewares/authHandler.js";
import multer from "multer";
import path from 'path'
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'frontend/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end i


router.post("/", upload.single("file"), createCategory)

router.put('/:id', updateCategory)
router.route("/:categoryId").delete(removeCategory)
router.route("/categories").get(allCategories)
router.route("/:id").get( singleCategory)
export default router

