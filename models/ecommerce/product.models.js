import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        lowercase: true,
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        trim: true,
        default: 0,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        trim: true,
        default: 0,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner is required']
    },
}, {
    timestamps: true
})

export const Product = mongoose.model('Product', productSchema)