const express = require('express')
const router = express.Router()
const Item = require('../models/item')
 

//get all
router.get('/', async (req, res) => {
    console.log("inside home")
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

router.post('/', async(req, res) => {            
            const item = new Item({
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

//get one
router.get('/:id', getItem, (req,res) => {
    console.log("inside id")
    let responseFromGetItem = res.item;
    res.send(responseFromGetItem)
})

async function getItem (req, res, next){
    let item
    try {
        item = await Item.findById(req.params.id)
        if(item == null){
            return res.status(404).message.json(({message: 'Cannot find item'}))
        } 
    } catch (error){
        // return res.status(500).message.json(({message: error.message}))
    }
    res.item = item
    next()
}

router.delete('/items/:id', async (req, res) => {
    const deletedItem =  await Item.findById(req.params.id)
    if(deletedItem == null){
       return res.status(404).message.json({message: "item doesn't exist"})
    } 
        deletedItem.delete()
        res.send(deletedItem.name + ' deleted')

})

module.exports = router