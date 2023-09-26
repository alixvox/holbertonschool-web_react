// Importing the JSON data from notifications.json
import { schema, normalize } from 'normalizr';
import notificationsData from '../../../../notifications.json';

// Define user schema
const user = new schema.Entity('users');

// Define message schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define notification schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Function to normalize the data
export const normalizedData = normalize(notificationsData, [notification]);

// Exporting the schemas
export { user, message, notification };

/**
 * Function to get all notifications by user
 * @param {string} userId - The ID of the user
 * @returns {Array} - List containing all the context objects from the notifications.json data
 */
export function getAllNotificationsByUser(userId) {
  const userNotifications = notificationsData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
  return userNotifications;
}

