import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = fromJS({
    filter: "DEFAULT",
    notifications: {
      1: { id: 1, isRead: false, type: "default", value: "New course available" },
      2: { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" },
    }
  });

  it('filterTypeSelected returns the correct filter type', () => {
    expect(filterTypeSelected(state)).toEqual("DEFAULT");
  });

  it('getNotifications returns the notifications as a Map', () => {
    expect(getNotifications(state)).toEqual(state.get('notifications'));
  });

  it('getUnreadNotifications returns only unread notifications as a Map', () => {
    const unreadNotifications = fromJS({
      1: { id: 1, isRead: false, type: "default", value: "New course available" },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" },
    });
    expect(getUnreadNotifications(state)).toEqual(unreadNotifications);
  });
});
