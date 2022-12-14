const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()

// Cors
app.use(cors())

// Parse Body
app.use(express.json())

// Connect to server
app.listen(3005, () => {
  console.log('Listening on port 3005')
})

// Routes
app.use('/reviews', require('./routes/mainRoutes'))
app.use('/auth', require('./routes/auth'))
