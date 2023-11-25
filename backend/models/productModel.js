import mongoose from "mongoose";


const productSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please add product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please add product description"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please add product category"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please add product price"],
        trim: true
    },
    stocks: {
        type: Number,
        default: 0
    },
    image: {
        type: [String],
    }

  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;