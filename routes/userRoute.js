const express = require('express')
const { registerUser, loginUser, currentUser } = require('../controllers/userController')

const router = express.Router()

router.route('/').get((req, res) => { //http://localhost:3000/api/users
    res.json('Welcome to User Route')
})

router.route('/register').post(registerUser) //http://localhost:3000/api/users/register && different way to write Api request below

router.post('/login', loginUser) //http://localhost:3000/api/users/login

router.get('/currentUser', currentUser) //http://localhost:3000/api/users/login


module.exports = router 