import mongoose from "mongoose";


const productSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    stocks: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
    }

  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;