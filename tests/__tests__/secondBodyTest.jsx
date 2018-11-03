import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SecondBody from '../../client/src/components/secondBody.jsx';

test('should have initial button prior to first click', () => {
  var component = shallow(<SecondBody moresummary={'Sample Summary'} />);
  expect(component.find('#Hide').text()).toBe('Read more about the space');
});

test('should show second button after first click', () => {
  var component = mount(<SecondBody moresummary={'Sample Summary'} />);
  component.find('#Hide').simulate('click');
  expect(component.find('#Hide').text()).toBe('Hide');
});

test('should show summary data only after initial click', () => {
  var component = mount(<SecondBody moresummary={'Sample Summary'} />);
  expect(component.find('#summary').exists()).toBe(false);
  component.find('#Hide').simulate('click');
  expect(component.find('#summary').text()).toBe('Sample Summary');
});
