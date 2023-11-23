import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true
    }
})


export default mongoose.model("Category", categorySchema)
