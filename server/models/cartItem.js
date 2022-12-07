const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema( {
    itemId:{
        type: Number,
        required: true  
    },
    count: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('cartItem', cartItemSchema)