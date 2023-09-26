import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 3 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('verifies that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('verifies that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    // Simulate input change
    emailInput.simulate('change', { target: { value: 'test@email.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

});
