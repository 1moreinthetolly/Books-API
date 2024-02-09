// DEPENDENCIES
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
  console.log('connected to mongo:', process.env.MONGO_URI) 


// Index
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// BOOKS
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)


// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})