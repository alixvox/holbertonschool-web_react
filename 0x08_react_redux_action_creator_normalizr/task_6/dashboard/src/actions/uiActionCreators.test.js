import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('uiActionCreators', () => {
  it('login creates an action to login a user', () => {
    const email = 'test@example.com';
    const password = 'password';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout creates an action to logout a user', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer creates an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer creates an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
