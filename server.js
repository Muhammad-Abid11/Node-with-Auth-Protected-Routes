const express = require('express')
const dotenv = require('dotenv').config(); //this will configure .env with project
const app = express()

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

*/