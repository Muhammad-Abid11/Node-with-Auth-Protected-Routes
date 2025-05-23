const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database connected Successfully....')
    } catch (error) {
        console.log("error", error)
        process.exit(1)
    }
}
module.exports=connectDB