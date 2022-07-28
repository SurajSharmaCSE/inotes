const connectTomango=require('./db');
connectTomango();

// script start  -> this script copy from express js server official website for testing purpose
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// script End  ->