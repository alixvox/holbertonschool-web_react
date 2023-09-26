// Importing the JSON data from notifications.json
import notificationsData from '../../../../notifications.json';

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

