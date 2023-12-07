import Category from '../models/categoryModel.js'
import asyncHandler from '../middlewares/asyncHandler.js'



const createCategory = asyncHandler(async (req, res) => {
    try {
      const { title } = req.body;
  
      if (!title) {
        return res.json({ error: "title is required" });
      }
  
      const existingCategory = await Category.findOne({ title });
  
      if (existingCategory) {
        return res.json({ error: "Already exists" });
      }
  
      const category = await new Category({ title, image: req.file.filename }).save();
      res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  });
  


  const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    const { title } = req.body;
    try {
        category.title = title;

        const updated = await category.save();
        return res.status(201).json({Status: true, updated})
    } catch (error) {
        return res.status(500).json({Status: false, Error: "Something went wrong "})
    }
})
const removeCategory = asyncHandler(async (req, res) => {
    try {
        const removed = await Category.findByIdAndDelete(req.params.categoryId)
        if(!removed) {
            return res.status(404).json({Status: false, Error: "Category not found"})
        } else {
            return res.status(201).json({Status: true, Success: "Remove Success"})
        }
    } catch (error) {
        res.status(400).json({Status: false, Error: "Something went wrong"})
    }
})

const allCategories = asyncHandler(async (req, res) => {
    const all = await Category.find({})
    return res.status(201).json({Status: true, Result: all})
})

const singleCategory = asyncHandler(async (req, res) => {
    try {
        const single = await Category.findOne({_id: req.params.id})
        return res.status(201).json({Status: true, single})
    } catch (error) {
        return res.status({Status: false, Error: `Something went wrong ${error.message}`})
    }
})

export {createCategory, updateCategory, removeCategory, allCategories, singleCategory}