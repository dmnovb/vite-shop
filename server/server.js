require('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection

app.use(cors())

db.on('error', (error) => {
    console.log(error)
})

db.once('open', () => {
    console.log('connected to database')
})

app.use(express.json())

const itemsRouter = require('./routes/items') 
app.use('/items', itemsRouter)

app.listen(3000, () => {
    console.log("server started")
})