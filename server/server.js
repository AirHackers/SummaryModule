const express = require('express')
const app = express()
const port = 3010
const bodyParser = require('body-parser')
const path = require('path')
const dataGen = require('./dataGen.js').dataGen
const Home = require('./dataGen.js').home
const Sequelize = require('sequelize');


app.use(bodyParser.json());

app.use('/', express.static(path.join('././client/dist')))

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/home', (req, res) => {
    Home.findAll({
        where: {
          id: Math.floor(Math.random() * (101))
        }
    }).then((homes) => {
        res.send(homes)
    });
})

app.listen(port, () => {
    //dataGen();
    console.log(`Server listening on port ${port}!`)
})