const express = require('express')
const router = express.Router()
const CartItem = require('../models/cartItem')

router.get('/', async (req, res) => {
    try {
        const items = await CartItem.find()
        if(items.length === 0){
            res.json('no items')
        } else {
            res.json(items)
        }

    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req, res) => {            
    const item = new CartItem({
        name: req.body.name, 
        price: req.body.price,
        description: req.body.description
    })
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router