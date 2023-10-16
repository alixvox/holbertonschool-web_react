import React from 'react';
import { fromJS, Map } from 'immutable';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ConnectedApp, { App, mapStateToProps } from './App';  // Ensure path is correct
import uiReducer from '../reducers/uiReducer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const store = createStore(uiReducer);

describe('<App />', () => {
  
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },  
  ];

  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  });

  it('contains the Notifications component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(wrapper.find('Notifications').exists()).toBe(true);
    });
  
  it('contains the CourseList component when logged in', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    store.dispatch({ type: 'LOGIN', user: { email: 'ale@e.c', password: 'asd', isLoggedIn: true } });
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find('CourseList').exists()).toBe(true);
    expect(wrapper.find('Login').exists()).toBe(false);
  });

  it('contains the Header component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('calls logOut and alert when "control" and "h" keys are pressed', () => {
    const alertMock = jest.fn();
    global.alert = alertMock;
    const logOut = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const appWrapper = wrapper.find(App).dive();
    appWrapper.instance().handleKeyDown({ ctrlKey: true, key: 'h' });
    
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    global.alert = window.alert; // Restore the original alert function
  });

  it('logIn function updates the state correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const instance = wrapper.instance();
    instance.logIn('test@email.com', 'password');

    expect(wrapper.state().user).toEqual({
      email: 'test@email.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('logOut function updates the state correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    wrapper.setState({ user: { isLoggedIn: true } });
    const instance = wrapper.instance();
    instance.logOut();

    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it('checks that the default state for displayDrawer is false', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('checks that calling handleDisplayDrawer updates the state', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('checks that calling handleHideDrawer updates the state', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('markNotificationAsRead removes the notification from the list', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
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

describe('mapStateToProps', () => {
  it('should map the state to props correctly', () => {
    const state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
      }
    });
    const expectedOutput = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedOutput);
  });
});

