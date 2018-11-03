import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HighLightChild from '../../client/src/components/highlightChild.jsx';
import Highlights from '../../client/src/components/highlights.jsx';

test('text should change when highlight is clicked on', () => {
  var components = mount(<HighLightChild highlight={'test'} comment={'test2'} />);
  expect(components.find('#summarymodule_highlights_buttons2').exists()).to.equal(false);
  //expect(components.exists('#summarymodule_highlights_buttons')).to.equal(true);
  // expect(components.find('#summarymodule_highlights_buttons2').exists()).toBe(false);
  //   components.find('.openAmenitiesModal').simulate('click');
  //   expect(components.find('#summarymodule_highlights_buttons2').exists()).toBe(false);
  // expect(components.state('showModalTwo')).toBe(true);
});
