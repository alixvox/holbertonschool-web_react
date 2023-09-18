import React from 'react';
import { shallow } from 'enzyme';
import CourseList from '../../../../task_0/dashboard/src/CourseList/CourseList';
import CourseListRow from '../../../../task_0/dashboard/src/CourseList/CourseListRow';

describe('<CourseList />', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders correctly with empty listCourses or no prop', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3); // 1 for header and 1 for "No course available yet"
    expect(wrapper.find(CourseListRow).last().props().textFirstCell).toEqual('No course available yet');
  });

  it('renders list of courses correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5); // 1 for header and 3 for courses
  });
});
