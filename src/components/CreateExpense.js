import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class CreateExpense extends React.Component {
    onSubmit = expense => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <p>Add</p>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddExpense: expense => dispatch(startAddExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(CreateExpense);
