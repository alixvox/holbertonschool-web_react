import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright [current year] - Holberton School"', () => {
    const wrapper = shallow(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(`Copyright ${currentYear} - Holberton School`);
  });  
});
