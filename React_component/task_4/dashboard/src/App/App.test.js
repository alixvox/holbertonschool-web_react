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
  
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },  
  ];

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications listNotifications={listNotifications} />)).toBe(true);
  });

  it('contains the CourseList component when logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
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

  it('calls logOut and alert when "control" and "h" keys are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.fn();
    global.alert = alertMock;

    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();

    instance.handleKeyDown({ ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    global.alert = window.alert; // Restore the original alert function
  });
  
});
