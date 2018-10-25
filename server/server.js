const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Home = require('./dataGen.js').home;

const app = express();
const port = 3010;

app.use(bodyParser.json());

app.use('/', express.static(path.join('././client/dist')));

app.get('/home', (req, res) => {
  let num = Math.floor(Math.random() * 101);
  if (req.query.home) {
    num = req.query.home;
  }
  Home.findAll({
    where: {
      id: num
    }
  }).then(homes => {
    res.send(homes);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
