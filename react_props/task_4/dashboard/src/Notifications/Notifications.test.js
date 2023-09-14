// Add these imports:
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

// Then, update your tests:

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('menu item and div.Notifications are displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
