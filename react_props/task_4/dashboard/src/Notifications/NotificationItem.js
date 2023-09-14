import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  if (props.html) {
    return <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>;
  }
  return <li data-notification-type={props.type}>{props.value}</li>;
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string
};

export default NotificationItem;
