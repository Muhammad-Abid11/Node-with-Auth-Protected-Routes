import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        requied: [true, 'Password is required']
    },
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema) 
//if we don't add "User" in the model name, it will automatically add "s" 
// to the name and create a collection with the name "users" in the database

//if we type plural words then mongose will not add "s" to the name
//but it is not a good practice to use plural words in the model name
//so we should use singular words in the model name
// mongoose will automatically create a collection with the name "users" in the database






//contacts is a collection name in database
//Contact is the name of the model,

/* 
when we add property -> "timestamps: true", 
it will automatically add two properties: createdAt and updatedAt
 
*/