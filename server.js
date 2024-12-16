const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config(); //this will configure .env with project
connectDB()
const app = express()
app.use(express.json())
app.use(errorHandler)
const port = process.env.PORT || 3001

/*
app.get('/', (req, res) => {
    // res.send('Hello World')
    res.status(200).json({ message: 'Hello World' })
}) 
*/
app.use('/api/contacts',require('./routes/contactRoute'))
app.listen(port, () => console.log('server is running at port...', port))




/*

npm i express
npm i -D nodemon
npm i dotenv 
npm i express-async-handler
npm i mongoose
*/