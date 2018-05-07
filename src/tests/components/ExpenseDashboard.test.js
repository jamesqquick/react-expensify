import React from 'react';
import Dashboard from '../../components/Dashboard';
import { shallow } from 'enzyme';

test('should render dashboard correctly', () => {
	const wrapper = new shallow(<Dashboard />);
	expect(wrapper).toMatchSnapshot();
});
