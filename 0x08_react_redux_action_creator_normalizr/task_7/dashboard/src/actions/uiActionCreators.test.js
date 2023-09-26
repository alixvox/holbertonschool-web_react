import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
import {
  login,
  logout,
  loginRequest,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators'; // Adjust the path if needed

import fetch, { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest Action Creator', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('dispatches LOGIN_SUCCESS when fetching login has been done', () => {
    fetch.mockResponseOnce(JSON.stringify({ user: 'user' }));

    const expectedActions = [
      { type: LOGIN, user: { email: 'user', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('user', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN_FAILURE when fetching login fails', () => {
    fetch.mockReject(new Error('fake error message'));

    const expectedActions = [
      { type: LOGIN, user: { email: 'user', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('user', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

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
