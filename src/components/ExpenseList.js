import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Basic component
export const ExpenseList = props => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.length === 0 && <p>No Expenses</p>}
		{props.expenses.map(expense => {
			return <ExpenseListItem key={expense.id} {...expense} />;
		})}
	</div>
);

//mapping of state to props
const mapStateToProps = state => ({
	expenses: selectExpenses(state.expenses, state.filters)
});

//exported component with props
export default connect(mapStateToProps)(ExpenseList);
