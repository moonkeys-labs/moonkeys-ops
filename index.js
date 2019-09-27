const express = require('express')
const app = express()

const PORT = 3000
const ENV =  process.NODE_ENV || 'development'

app.get('', (req, res) => {
  res.json({
    environment: ENV,
    status: 'UP',
    build: 'v1.0'
  })
})

app.listen(PORT, () => {
  console.log('Running on ' + PORT)
})