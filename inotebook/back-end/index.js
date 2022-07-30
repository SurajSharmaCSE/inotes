const connectTomango=require('./db');
const express = require('express')


connectTomango();
const app = express()
const port = 3000

// Available routes
app.use('./api/auth', require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// script End  ->