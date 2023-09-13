// task_3/dashboard/src/App.test.js

import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-header').exists()).toBe(true);
    });

    it('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-body').exists()).toBe(true);
    });

    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-footer').exists()).toBe(true);
    });
});
