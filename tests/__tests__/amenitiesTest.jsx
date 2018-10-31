import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Amenities from '../../client/src/components/amenities.jsx';

test('should have 4 list items', () => {
  var components = mount(
    <Amenities amOne={'test1'} amTwo={'test2'} amThree={'test3'} amFour={'test4'} />
  );
  var length = components.find('li').length;
  expect(length).toBe(4);
});
