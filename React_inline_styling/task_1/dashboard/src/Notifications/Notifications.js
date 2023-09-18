import React from 'react';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '30%',
    border: '1px rgb(221, 72, 72) dashed',
    padding: '5px',
    backgroundColor: '#fff8f8',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  defaultNotification: {
    color: 'rgb(1, 1, 170)',
  },
  urgentNotification: {
    color: 'rgb(255, 60, 0)',
  },
});

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
