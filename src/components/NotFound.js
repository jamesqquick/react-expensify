import React from 'react';
import { NavLink } from 'react-router-dom';
const NotFoundPageComponent = () => (
	<div>
		404!
		<NavLink to="/">Go Home</NavLink>
	</div>
);

export default NotFoundPageComponent;
