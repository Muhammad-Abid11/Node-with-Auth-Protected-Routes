const express = require('express');
const {
    getContact,
    getContactByID,
    createContact,
    updateContact,
    deleteContact
} = require('../controllers/contactController');
const router = express.Router();

// router.get('/', getContact).post('/',createContact)
// router.get('/:id',getContactByID).put('/:id',updateContact).delete('/:id',deleteContact)

//both are same above and below

router.route('/').get(getContact).post(createContact)
router.route('/:id').get(getContactByID).put(updateContact).delete(deleteContact)

module.exports= router