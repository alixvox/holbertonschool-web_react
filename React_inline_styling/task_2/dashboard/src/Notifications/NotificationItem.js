import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'rgb(1, 1, 170)',
  },
  urgent: {
    color: 'rgb(255, 60, 0)',
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
        className={css(styles[type])}
      />
    );
  } else {
    content = (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        className={css(styles[type])}
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
