import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Amenities from '../../client/src/components/amenities.jsx';
import App from '../../client/src/components/app.jsx';
import RoomInfo from '../../client/src/components/roomInfo.jsx';
import fetch from 'isomorphic-fetch';

test('should have 4 list items', () => {
  var components = mount(
    <Amenities amOne={'test1'} amTwo={'test2'} amThree={'test3'} amFour={'test4'} />
  );
  var length = components.find('li').length;
  expect(length).toBe(4);
});

test('should open amenities modal on click', () => {
  var components = mount(<App />, { disableLifecycleMethods: true });
  expect(components.find('.openAmenitiesModal').exists()).toBe(true);
  components.find('.openAmenitiesModal').simulate('click');
  expect(components.state('showModalTwo').toBe(true));
});

test('should have a 1 guest element', () => {
  var components = mount(<RoomInfo info={1} string={'guest'} />, {
    disableLifecycleMethods: true
  });
  // expect(components.find('.summary_module_roominfo'))
  //   .text()
  //   .toBe('1 guest');
  expect(components.find('.summary_module_roominfo').text()).toBe('1 guest');
});
