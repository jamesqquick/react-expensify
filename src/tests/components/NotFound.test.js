import React from 'react';
import NotFound from '../../components/NotFound';
import { shallow } from 'enzyme';

test('should render NotFound correctly', () => {
	const wrapper = new shallow(<NotFound />);
	expect(wrapper).toMatchSnapshot();
});
