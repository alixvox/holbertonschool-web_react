import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

jest.mock('aphrodite');

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

  it('calls markAsRead with the right message', () => {
    const mockLog = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(mockLog).toHaveBeenCalledWith('Notification 1 has been marked as read');
    mockLog.mockRestore();
  });

    it('does not re-render when updating with the same list', () => {
    const wrapper = shallow(<Notifications />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: [] });
    expect(shouldUpdate).toBe(false);
  });

  it('re-renders when updating with a longer list', () => {
    const currentList = [{ id: 1, value: 'New' }];
    const wrapper = shallow(<Notifications listNotifications={currentList} />);
    
    const longerList = [
      { id: 1, value: 'New' },
      { id: 2, value: 'Newer' }
    ];
    
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: longerList });
    expect(shouldUpdate).toBe(true);
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

});
