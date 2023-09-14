import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    let content;
    if (html) {
      content = <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} />;
    } else {
      content = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
    }
    return content;
  }
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

export default NotificationItem;
