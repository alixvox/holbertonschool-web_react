import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, SELECT_COURSE } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual(initialState);
  });

  it('changes isNotificationDrawerVisible property correctly when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
