import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three NotificationItem components', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
    });
});
