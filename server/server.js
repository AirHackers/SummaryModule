const express = require('express')
const app = express()
const port = 3010
const bodyParser = require('body-parser')
const path = require('path')
const dataGen = require('./dataGen.js').dataGen


app.use('/', express.static(path.join('././client/dist')))

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    dataGen();
    //console.log(`Example app listening on port ${port}!`)
})