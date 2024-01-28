const express = require('express')
const port = 8000
const app = express()

app.use('/user', require('./routes/user'))


module.exports = app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`)
})