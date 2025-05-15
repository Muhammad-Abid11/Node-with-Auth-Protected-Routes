import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
}, {
    timestamps: true
})
//Incomplete schema
export const Category = mongoose.model('Category', categorySchema)