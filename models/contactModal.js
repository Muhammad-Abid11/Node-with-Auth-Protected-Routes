const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        requied: [true, 'Password is required']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema) //Contact is a collection name in database