import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
  ];

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders correctly with empty listNotifications or no prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).first().props().value).toEqual('No new notification for now');
  });

  it('renders list of notifications correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('does not display "Here is the list of notifications" when list is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<NotificationItem type="default" value="No new notification for now" />)).toBe(true);
  });
});
