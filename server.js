const express = require('express');
const errorHandler = require('./middleware/errorhandler'); //custom error handler
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config(); //this will configure .env with project
connectDB()
const app = express()
//app.use() //middleware
app.use(express.json())//receive body's data (whenever data receive from client to server)

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  // res.send('Hello World')
  res.status(200).json({ message: 'Hello World' }) //response in json format
})

app.use('/api/contacts', require('./routes/contactRoute')) //Restfull Api
app.use('/api/users', require('./routes/userRoute')) //Restfull Api
// Default route 
app.get("*", (req, res) => {
  // Here user can also design an 
  // error page and render it  
  res.status(404).json({ message: "Page not Found" });
});

app.use(errorHandler)//configure error handling
app.listen(port, () => console.log(`server is running at port... http://localhost:${port}`))




/*
https://www.youtube.com/watch?v=H9M02of22z4&t=153s

npm i express
npm i -D nodemon
npm i dotenv 
npm i express-async-handler
npm i mongoose
npm i bcryptjs //for password hashing
npm i jsonwebtoken //for token
*/