// CourseList/CourseListRow.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="test" />);
  });

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th[colSpan="2"]')).toHaveLength(1);
  });
  
  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
});
