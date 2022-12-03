const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // category: {
    //     type: String,
    //     required: true,
    // },
    // image: {
    //     type: String,
    //     required: false,
    // } 
})

module.exports = mongoose.model('Item', itemSchema)