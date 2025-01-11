const asyncHandler = require('express-async-handler') //try-catch handler for each API request
const Contact = require('../models/contactModal') //import contact model
// @desc    Get All Contacts
// @route   Get api/contacts
// @access  public
const getContact = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/
    const contacts = await Contact.find({})
    // res.status(200).json({ message: 'Get Contact' })
    res.status(200).json(contacts)
})

// @desc    Get Contacts
// @route   Get api/contacts/:id
// @access  public
const getContactByID = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/123
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found')
    }
    res.status(200).json(contact)
    // res.status(200).json({ message: `Get Contact ${req.params.id}` })
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
    const createdContact = await Contact.create({
        name,
        email,
        password
    })
    // res.status(200).json({ message: `Post Contact ` })
    res.status(200).json(createdContact)
})

// @desc    Update  Contacts
// @route   PUT api/contacts/:id
// @access  public
const updateContact = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validate request body
    if (!name && !email && !password) {
        res.status(400);
        throw new Error('Please provide at least one field to update');
    }

    const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);  // Keep consistent with other endpoints
});

// @desc    Delete All Contacts
// @route   Delete api/contacts/:id
// @access  public
const deleteContact = asyncHandler(async (req, res) => {//http://localhost:3000/api/contacts/123
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found')
    }
    res.status(200).json({ message: "Contact deleted successfully" })
})

module.exports = {
    getContact,
    getContactByID,
    createContact,
    updateContact,
    deleteContact
}