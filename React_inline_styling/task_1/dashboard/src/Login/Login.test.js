import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  afterAll(() => {
    // Stop suppressing style injection.
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });  

});
