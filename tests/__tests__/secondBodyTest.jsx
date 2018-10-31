import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SecondBody from '../../client/src/components/secondBody.jsx';

test('should have initial button prior to first click', () => {
  var component = shallow(<SecondBody moresummary={'Sample Summary'} />);
  expect(component.find('#Hide').text()).toBe('Read more about the space');
  //expect(length).toBe(4);
  //   component.find('#Hide').simulate('click');
  //   expect(component.find('.clicks-1').length).to.equal(1);
});

test('should show second button after first click', () => {
  var component = mount(<SecondBody moresummary={'Sample Summary'} />);
  component.find('#Hide').simulate('click');
  expect(component.find('#Hide').text()).toBe('Hide');
  //expect(length).toBe(4);
  //   component.find('#Hide').simulate('click');
  //   expect(component.find('.clicks-1').length).to.equal(1);
});
