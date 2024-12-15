// @desc    Get All Contacts
// @route   Get api/contacts
// @access  public
const getContact = (req, res) => {//http://localhost:3000/api/contacts/
    res.status(200).json({ message: 'Get Contact' })
}

// @desc    Get Contacts
// @route   Get api/contacts/:id
// @access  public
const getContactByID = (req,res)=>{//http://localhost:3000/api/contacts/123
    res.status(200).json({ message: `Get Contact ${req.params.id}` })
}

// @desc    Post New Contacts
// @route   POST api/contacts
// @access  public
const createContact = (req,res)=>{//http://localhost:3000/api/contacts/
    res.status(200).json({ message: `Post Contact ` })
}

// @desc    Update  Contacts
// @route   PUT api/contacts/:id
// @access  public
const updateContact = (req,res)=>{//http://localhost:3000/api/contacts/123
    res.status(200).json({ message: `Update Contact ${req.params.id}` })
}

// @desc    Delete All Contacts
// @route   Delete api/contacts/:id
// @access  public
const deleteContact = (req,res)=>{//http://localhost:3000/api/contacts/123
    res.status(200).json({ message: `Delete Contact ${req.params.id}` })
}

module.exports = {
    getContact,
    getContactByID,
    createContact,
    updateContact,
    deleteContact
}