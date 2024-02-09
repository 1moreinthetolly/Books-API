// DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => { 
  console.log('connected to mongo: ', process.env.MONGO_URI) 
})