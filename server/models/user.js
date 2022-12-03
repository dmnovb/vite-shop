const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})