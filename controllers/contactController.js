const asyncHandler = require('express-async-handler') //try-catch handler for each API request
// @desc    Get All Contacts
// @route   Get api/contacts
// @access  public
const getContact = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/
    res.status(200).json({ message: 'Get Contact' })
})

// @desc    Get Contacts
// @route   Get api/contacts/:id
// @access  public
const getContactByID = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/123
    res.status(200).json({ message: `Get Contact ${req.params.id}` })
})

// @desc    Post New Contacts
// @route   POST api/contacts
// @access  public
const createContact = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('All fields name, email, password must be needed ')
    }
    res.status(200).json({ message: `Post Contact ` })
})

// @desc    Update  Contacts
// @route   PUT api/contacts/:id
// @access  public
const updateContact = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/123
    res.status(200).json({ message: `Update Contact ${req.params.id}` })
})

// @desc    Delete All Contacts
// @route   Delete api/contacts/:id
// @access  public
const deleteContact = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/123
    res.status(200).json({ message: `Delete Contact ${req.params.id}` })
})

module.exports = {
    getContact,
    getContactByID,
    createContact,
    updateContact,
    deleteContact
}