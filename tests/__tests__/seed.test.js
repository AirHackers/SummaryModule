const { home, dataGen } = require('../../server/dataGen.js');
import SecondBody from '../../client/src/components/secondBody.jsx';

// check seeding success

beforeAll(() => {
  return new Promise(resolve => {
    // Asynchronous task
    // ...
    home.sync({ force: true });
    resolve();
  });
});

test('check seeding', async () => {
  await dataGen();
  const data = await home.findAll();
  expect(data.length).toEqual(100);
});
