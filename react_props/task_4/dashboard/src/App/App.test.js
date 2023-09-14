import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('contains the Login component when not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
  
  it('contains the CourseList component when logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
    expect(wrapper.contains(<CourseList />)).toBe(true);
  });
  
});
