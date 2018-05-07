import React from 'react';
import { deleteExpense } from '../actions/expenses';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
	return (
		<div>
			<h3>{description}</h3>
			<p>
				Amount: {amount} - Created At: {createdAt}
			</p>
			<NavLink to={`/edit/${id}`}>
				<button>Edit</button>
			</NavLink>
		</div>
	);
};

export default ExpenseListItem;
