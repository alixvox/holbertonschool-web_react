import React from 'react';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications({ listNotifications = [], displayDrawer = false }) {
  return (
    <div className="NotificationsContainer" data-display-drawer={displayDrawer ? "true" : "false"}>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="NotificationsContent">
          <button
            style={{ position: 'absolute', right: '10px', top: '10px' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="Close icon" width="15px" />
          </button>
          <p>Here is the list of notifications</p>
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
      )}
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
};

export default Notifications;
