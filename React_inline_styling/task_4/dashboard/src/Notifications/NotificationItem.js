import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  default: {
    color: 'rgb(1, 1, 170)',
  },
  urgent: {
    color: 'rgb(255, 60, 0)',
  },
  item: {
    width: '100%', // take the entire screen width
    borderBottom: '1px solid black', // black border at the bottom
    fontSize: '20px', // set font size
    padding: '10px 8px', // set padding
  },
});

function NotificationItem({ type, value, html, markAsRead, id }) {
  let content;
  if (html) {
    content = (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        className={css(styles[type], styles.item)} // Apply the item style
      />
    );
  } else {
    content = (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        className={css(styles[type], styles.item)} // Apply the item style
      >
        {value}
      </li>
    );
  }
  return content;
}


NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
};

export default React.memo(NotificationItem);
