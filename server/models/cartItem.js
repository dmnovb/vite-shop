const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema( {
    itemId:{
        type: Object,
        required: true  
    },
    count: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('cartItem', cartItemSchema)