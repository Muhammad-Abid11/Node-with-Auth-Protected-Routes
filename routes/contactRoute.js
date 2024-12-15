const express = require('express');
const {
    getContact,
    getContactByID,
    createContact,
    updateContact,
    deleteContact
} = require('../controllers/contactController');
const router = express.Router();

router.get('/', getContact)
router.get('/:id',getContactByID)
router.post('/',createContact)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)

module.exports= router