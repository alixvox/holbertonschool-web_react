import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils, css } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: jest.fn().mockReturnValue({ notificationsContainer: {}, menuItem: {} }),
  },
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
  },
  css: jest.fn().mockImplementation(() => 'mockedClassName'),
}));

describe('<Notifications />', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
  ];

  it('renders without crashing', () => {
    shallow(<Notifications handleHideDrawer={() => {}} />);
  });

  it('renders correctly with empty listNotifications or no prop', () => {
    const wrapper = mount(<Notifications displayDrawer={true} handleHideDrawer={() => {}} />);
    expect(wrapper.text()).toContain('No new notification for now');
  });
          
  it('renders list of notifications correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={() => {}} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('does not display "Here is the list of notifications" when list is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={() => {}} />);
    expect(wrapper.contains(<NotificationItem type="default" value="No new notification for now" />)).toBe(true);
  });

  it('calls markNotificationAsRead with the right message', () => {
    const mockMarkAsRead = jest.fn();
    const listNotifications = [{ id: 1, value: 'New', type: 'default' }];
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true} 
        handleHideDrawer={() => {}} 
        markNotificationAsRead={mockMarkAsRead}
        listNotifications={listNotifications}
      />
    );
    wrapper.find(NotificationItem).first().props().markAsRead(1);
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
    
  it('does not re-render when updating with the same list', () => {
    const listNotifications = [];
    const wrapper = shallow(<Notifications handleHideDrawer={() => {}} listNotifications={listNotifications} />);
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');
    wrapper.setProps({ listNotifications: listNotifications }); // Passing the same object reference
    expect(renderSpy).not.toHaveBeenCalled();
  });
  
  it('re-renders when updating with a longer list', () => {
    const currentList = [{ id: 1, value: 'New', type: 'default' }];
    const wrapper = shallow(<Notifications listNotifications={currentList} handleHideDrawer={() => {}} />);
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');
    const longerList = [
      { id: 1, value: 'New', type: 'default' },
      { id: 2, value: 'Newer', type: 'default' }
    ];
    wrapper.setProps({ listNotifications: longerList });
    expect(renderSpy).toHaveBeenCalled();
  });
  
  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = mount(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={() => {}} />);
    wrapper.find('[data-testid="menuItem"]').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies that clicking on the button calls handleHideDrawer', () => {
      const handleHideDrawer = jest.fn();
      const wrapper = mount(<Notifications displayDrawer = {true} handleHideDrawer={handleHideDrawer} />);
      wrapper.find('[data-testid="button"]').simulate('click');
      expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('calls markNotificationAsRead when a notification item is clicked', () => {
    const markNotificationAsReadMock = jest.fn();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = mount(
      <Notifications listNotifications={listNotifications} markNotificationAsRead={markNotificationAsReadMock} handleHideDrawer={() => {}} displayDrawer={true} />
      );
    wrapper.find(NotificationItem).first().simulate('click');
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });

  afterAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

});
