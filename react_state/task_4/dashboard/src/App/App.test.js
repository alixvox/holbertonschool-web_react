import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
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
    const alertMock = jest.fn();
    global.alert = alertMock;

    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.handleKeyDown({ ctrlKey: true, key: 'h' });

    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    global.alert = window.alert; // Restore the original alert function
  });

  it('logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@email.com', 'password');

    expect(wrapper.state().user).toEqual({
      email: 'test@email.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    const instance = wrapper.instance();
    instance.logOut();

    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it('checks that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('checks that calling handleDisplayDrawer updates the state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('checks that calling handleHideDrawer updates the state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('markNotificationAsRead removes the notification from the list', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const initialLength = wrapper.state().listNotifications.length;

    instance.markNotificationAsRead(1); // Assuming you have a notification with id 1

    expect(wrapper.state().listNotifications.length).toBe(initialLength - 1);
  });

  afterAll(() => {
    // Stop suppressing style injection.
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });  
  
});
