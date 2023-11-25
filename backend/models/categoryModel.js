import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true
    },
    image: {
        type: String
    }
})


export default mongoose.model("Category", categorySchema)
