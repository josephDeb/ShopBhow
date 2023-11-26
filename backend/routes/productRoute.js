import express from "express";
import multer from "multer";
import path from 'path'
const router = express.Router()

import {protect, authorizedAdmin} from '../middlewares/authHandler.js'
import {createProduct, updateProduct, allProducts, singleProduct, deleteProduct} from '../controlers/productController.js'

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


router.post('/create',protect, authorizedAdmin,  upload.single("file"), createProduct)
router.put('/:id',protect, authorizedAdmin,  updateProduct)
router.get('/',protect, authorizedAdmin,  allProducts)
router.get('/:id',protect, authorizedAdmin,  singleProduct)
router.delete('/:id',protect, authorizedAdmin, deleteProduct)
export default router