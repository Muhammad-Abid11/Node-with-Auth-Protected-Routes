const expressAsyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModal")
// @desc    register User
// @route   Post api/users/register
// @access  public
const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    // Input validation
    if (!name || !email || !password) { //check if all fields are filled
        res.status(400)
        throw new Error('Please fill all the fields')
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        res.status(400)
        throw new Error('Please provide a valid email address')
    }

    // Check if user exists
    const userExist = await User.findOne({ email }) //check if user already exists

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Password strength validation
    if (password.length < 6) {
        res.status(400)
        throw new Error('Password must be at least 6 characters long')
    }

    // const salt = await bcrypt.genSalt(10) //generate salt
    // const hashedPassword = await bcrypt.hash(password, salt) //hash password

    const hashedPassword = await bcrypt.hash(password, 10) //hash password
    const createdUser = await User.create({ //create user
        name,
        email: email.toLowerCase(), // Store email in lowercase
        password: hashedPassword
    })

    if (createdUser) {
        return res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            message: "User registered successfully"
        })
    }

    res.status(400)
    throw new Error('Invalid user data')
})

// @desc    Login User
// @route   Post api/users/login
// @access  public
const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) { //check if all fields are filled
        res.status(400)
        throw new Error('Please provide email and password')
    }

    // Find user and select password field explicitly
    const user = await User.findOne({ email }).select('+password')
    if (!user || !(await bcrypt.compare(password, user.password))) { //check if user exists and password is correct
        res.status(401)
        throw new Error('Invalid email or password')
    }

    // Generate token
    const token = jwt.sign(
        {
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        },
        process.env.ACCESS_JWT_SECRET_TOKEN,
        { expiresIn: '15m' }
    )

    return res.status(200).json({
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        },
        message: "Login successful"
    })
})

// @desc    Get Current User
// @route   Get api/users/current
// @access  private
const currentUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        message: "User Login Successfully"
    })
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}