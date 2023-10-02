import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging /> HOC', () => {
  it('logs component mount and unmount with pure HTML', () => {
    console.log = jest.fn();

    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);

    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs component mount and unmount with Login component', () => {
    console.log = jest.fn();

    const WrappedLogin = WithLogging(Login);
    const wrapper = shallow(<WrappedLogin />);

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
