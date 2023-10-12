import { createSelector } from 'reselect';

// Selector to get filter type
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get notifications
export const getNotifications = (state) => state.get('notifications');

// Selector to get unread notifications
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => notifications.filter((notification) => !notification.get('isRead'))
);
