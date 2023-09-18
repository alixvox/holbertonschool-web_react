import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySectionWithMarginBottom />', () => {
  it('renders BodySection component and passes props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);
    expect(bodySection.props().title).toEqual('test title');
    expect(bodySection.find('p').text()).toEqual('test children node');
  });
  
  afterAll(() => {
    // Stop suppressing style injection.
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
});
