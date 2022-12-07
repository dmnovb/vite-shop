require('dotenv').config()

const express = require('express');
const app = express()
// const app2 = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection

app.use(cors())
// app2.use(cors())

db.on('error', (error) => {
    console.log(error)
})

db.once('open', () => {
    console.log('connected to database')
})

app.use(express.json())


const itemsRouter = require('./routes/items') 
const cartItemsRouter =  require('./routes/cartItems') 

app.use('/items', itemsRouter)
app.use('/cartItems', cartItemsRouter)

const port = 3000

app.listen(port, () => {
    console.log("server started")
})
