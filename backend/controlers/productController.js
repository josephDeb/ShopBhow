// Turquoise
import Product from "../models/productModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";


const createProduct = asyncHandler(async (req, res) => {
    try {
        const { name, description, category, stocks, price } = req.body;
        const {id} = req.params

         if (!name || !description || !category || !stocks || !price) {
        return res.status(400).json({Status: false, Error: "Please fill all the fields"})
       }

        const productExist = await Product.findById(id)
        if(productExist) {
         return res.status(401).json({Status: false, Error: "Product already exist"})
        }
   
       const product = new Product({  name, description, category, stocks, price, image: req.file.filename});
       await product.save();
      return res.status(201).json({Status: true, product})
    } catch (error) {
       return res.status(500).json({Status: false, Error: "Something went wrong "})
    }
})


const updateProduct = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params

       const productExist = await Product.findByIdAndUpdate({_id: id})

        if(productExist) {
            const { name, description, category, stocks, price, image } = req.body;

            productExist.name = req.body.username || productExist.name;
            productExist.description = req.body.description || productExist.description;
            productExist.category = req.body.category || productExist.category;
            productExist.stocks = req.body.stocks || productExist.stocks;
            productExist.price = req.body.price || productExist.price;
            productExist.image = req.body.image || productExist.image;

            const productUpdated = await productExist.save()
            return res.status(201).json({Status: true, productUpdated})
        }

    } catch (error) {
       return res.status(500).json({Status: false, Error: "Something went wrong "})
    }
})

const allProducts = asyncHandler(async (req, res) => {
    const all = await Product.find({})
    return res.status(201).json({Status: true, Result: all})
})


const singleProduct = asyncHandler(async (req, res) => {
    try {
        const single = await Product.findOne({_id: req.params.id})
        return res.status(201).json({Status: true, single})
    } catch (error) {
        return res.status({Status: false, Error: `Something went wrong ${error.message}`})
    }
})


const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const removed = await Product.findByIdAndDelete({_id: req.params.id})
        if(!removed) {
            return res.status(404).json({Status: false, Error: "Product not found"})
        } else {
            return res.status(201).json({Status: true, Success: "Product Deleted"})
        }
    } catch (error) {
        res.status(400).json({Status: false, Error: "Something went wrong"})
    }
})


export {createProduct, updateProduct, allProducts, singleProduct, deleteProduct}
