import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html, markAsRead, id }) {
  let content;
  if (html) {
    content = <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} />;
  } else {
    content = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
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
