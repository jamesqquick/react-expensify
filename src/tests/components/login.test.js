import React from 'react';
import { LoginPage } from '../../components/Login';
import { shallow } from 'enzyme';

test('should render login correctly', () => {
    const wrapper = new shallow(<LoginPage startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = new shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(startLogin).toHaveBeenCalled();
});
