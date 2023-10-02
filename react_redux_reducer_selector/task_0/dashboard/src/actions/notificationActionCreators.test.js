import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('markAsAread creates an action to mark a notification as read', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsAread(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter creates an action to set the notification filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
