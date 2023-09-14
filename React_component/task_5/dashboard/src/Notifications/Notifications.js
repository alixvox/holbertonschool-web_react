import React from 'react';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { listNotifications, displayDrawer } = this.props;
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
            {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem key={notification.id} {...notification} markAsRead={this.markAsRead} />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
  static defaultProps = {
    listNotifications: [],
    displayDrawer: false
  };
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
    return false;
  }

}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
};

export default Notifications;
