// task_5/dashboard/src/Notifications/Notifications.js

import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer = false }) {
  return (
    <div className="NotificationsContainer" data-display-drawer={displayDrawer ? "true" : "false"}>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <>
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
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
