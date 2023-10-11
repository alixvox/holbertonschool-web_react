import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, SELECT_COURSE } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('returns the initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE }).toJS()).toEqual(initialState.toJS());
  });

  it('changes isNotificationDrawerVisible property correctly when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual(
      initialState.set('isNotificationDrawerVisible', true).toJS()
    );
  });
});
