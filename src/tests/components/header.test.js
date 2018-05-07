import React from 'react';
import { HeaderComponent } from '../../components/Header';
import { shallow } from 'enzyme';

test('should render header correctly', () => {
    const wrapper = new shallow(<HeaderComponent startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = new shallow(<HeaderComponent startLogout={startLogout} />);
    wrapper.find('#logoutBtn').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
