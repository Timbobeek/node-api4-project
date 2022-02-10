require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req,res)=>{
  res.json([
    { id:1, username: 'Timmy'},
    { id:2, username: 'Marcel'},
    { id:3, username: 'Capybara'},
    { id:4, username: 'Allison'},
    { id:5, username: 'Oscar'}
  ])
})

const PORT = process.env.PORT || 7777

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})