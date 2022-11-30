const express = require('express')
const router = express.Router()
const Item = require('../models/item')

//get all
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        if(items.length === 0){
            res.json('no items')
        } else {
            res.json(items)
        }

    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

//create
router.post('/', async(req, res) => {
    const item = new Item({
        name: req.body.name, 
        price: req.body.price
    })
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//get one
router.get('/:id', (req,res) => {
    // res.send(req.params.id)
})

// router.put('/:id')

// router.delete('/:id')

module.exports = router