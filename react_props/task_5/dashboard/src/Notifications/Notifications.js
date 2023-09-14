import React from 'react';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import NotificationItem from './NotificationItem';

function Notifications({ listNotifications = [] }) {
  return (
    <div className="Notifications">
      {/* ... (rest of the component) */}
      <ul>
        {listNotifications.length === 0 ? (
          <NotificationItem type="default" value="No new notification for now" />
        ) : (
          listNotifications.map(notification => (
            <NotificationItem key={notification.id} {...notification} />
          ))
        )}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
