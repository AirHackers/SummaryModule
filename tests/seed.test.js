const dataGen = require('../server/dataGen.js').dataGen;
const Home = require('../server/dataGen.js').home;

// check seeding success
//var func = () => {};

test('check seeding', async () => {
  await dataGen();
  const data = await Home.findAll();
  expect(data.length).toEqual(100);
});
