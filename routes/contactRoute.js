const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({ message: 'Get Contact' })
})
router.get('/:id',(req,res)=>{
    res.status(200).json({ message: `Get Contact ${req.params.id}` })
})
router.post('/',(req,res)=>{
    res.status(200).json({ message: `Post Contact ` })
})
router.put('/:id',(req,res)=>{
    res.status(200).json({ message: `Update Contact ${req.params.id}` })
})
router.delete('/:id',(req,res)=>{
    res.status(200).json({ message: `Delete Contact ${req.params.id}` })
})

module.exports= router