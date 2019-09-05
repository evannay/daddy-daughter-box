const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 2223

app.use('/', express.json())

mongoose.connect('mongodb://localhost:27017/dddb-app', { useNewUrlParser: true })
    .then(() => {
        console.log('mongoose is connected')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`)
})