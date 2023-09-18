import React from 'react';
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

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        displayDrawer: this.props.displayDrawer,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.toggleDisplayDrawer = this.toggleDisplayDrawer.bind(this); // bind the method
  }
  
  toggleDisplayDrawer() {
    this.setState(prevState => ({
        displayDrawer: !prevState.displayDrawer
    }));
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { listNotifications } = this.props;
    const { displayDrawer } = this.state;
    return (
      <div className={css(styles.notificationsContainer, displayDrawer ? conditionalStyles.displayNone : conditionalStyles.displayBlock)} data-display-drawer={displayDrawer ? "true" : "false"}>
      {!this.props.displayDrawer && <div className={css(styles.menuItem)} onClick={this.props.toggleDisplayDrawer}>Your notifications</div>}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{ position: 'absolute', right: '10px', top: '10px' }}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt="Close icon" width="15px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 ? (
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
