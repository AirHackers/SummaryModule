const { home, dataGen } = require('../../server/dataGen.js');

// check seeding success

test('check seeding', async () => {
  await dataGen();
  const data = await home.findAll();
  expect(data.length).toEqual(100);
});
