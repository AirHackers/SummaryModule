const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { dataGen } = require('./dataGen.js');
const Home = require('./dataGen.js').home;
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/homes/:homeId', express.static(path.join('././public')));

// Allow CORS for a given endpoint
const allowCORS = function(res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
};

app.get('/homes/:homeId/data', (req, res) => {
  Home.findAll({
    where: {
      id: req.param('homeId')
    }
  }).then(homes => {
    allowCORS(res);
    res.send(homes);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
