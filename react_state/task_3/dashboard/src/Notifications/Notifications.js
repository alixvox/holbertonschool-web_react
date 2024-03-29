import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './animations.css';

const conditionalStyles = StyleSheet.create({
  displayNone: {
    display: 'none',
  },
  displayBlock: {
    display: 'block',
  },
});

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    border: '1px rgb(221, 72, 72) dashed',
    padding: '5px',
    backgroundColor: '#fff8f8',
    fontSize: '20px', // set font size to 20px
  },
    ul: {
    listStyleType: 'none',
    padding: 0,
    margin: 0, // remove default margin
  },
  menuItem: {
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    textAlign: 'right',
    position: 'fixed', // make it float over every element
    right: '10px', // position it to the right
    top: '10px', // position it to the top
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: 'opacityChange, bounce',
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
  },
  notificationsContainer: {
    // ... (your existing styles for notificationsContainer)
  },
  defaultNotification: {
    color: 'rgb(1, 1, 170)',
  },
  urgentNotification: {
    color: 'rgb(255, 60, 0)',
  },
});

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: this.props.displayDrawer,
    };
    this.toggleDisplayDrawer = this.toggleDisplayDrawer.bind(this);
  }
  
  toggleDisplayDrawer() {
    this.setState(prevState => ({
      displayDrawer: !prevState.displayDrawer
    }));
  }

  render() {
    const { listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props; // Destructure markNotificationAsRead
    const { displayDrawer } = this.state;
    return (
      <div className={css(styles.notificationsContainer, displayDrawer ? conditionalStyles.displayNone : conditionalStyles.displayBlock)} data-display-drawer={displayDrawer ? "true" : "false"}>
        {!displayDrawer && <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{ position: 'absolute', right: '10px', top: '10px' }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="Close icon" width="15px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
            {listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem key={notification.id} {...notification} markAsRead={markNotificationAsRead} /> // Pass markNotificationAsRead
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
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    markNotificationAsRead: () => {}, // Default for markNotificationAsRead
  };
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired, // PropType for markNotificationAsRead
};

export default Notifications;
