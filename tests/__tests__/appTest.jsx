import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/src/components/app.jsx';

test('should have fetched data in state', async () => {
  var component = await mount(<App />);
  expect(component.state(home).length).toBe(19);
});
