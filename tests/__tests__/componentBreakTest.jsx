import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ComponentBreak from '../../client/src/components/componentBreak.jsx';

test('should have no text in div', () => {
  var component = shallow(<ComponentBreak />);
  expect(component.text()).toBe('');
});
