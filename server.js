// DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())