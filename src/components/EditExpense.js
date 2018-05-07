import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startDeleteExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class EditExpense extends React.Component {
    render() {
        return (
            <div>
                Edit expense: {this.props.match.params.id}
                <ExpenseForm
                    onSubmit={this.submitEdit}
                    expense={this.props.expense}
                />
                <button
                    id="startDeleteExpenseBtn"
                    onClick={this.startDeleteExpense}
                >
                    Delete
                </button>
            </div>
        );
    }

    submitEdit = expense => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    startDeleteExpense = () => {
        this.props.startDeleteExpense(this.props.expense.id);
        this.props.history.push('/');
    };
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(
            expense => expense.id === props.match.params.id
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startEditExpense: (id, expense) =>
            dispatch(startEditExpense(id, expense)),
        startDeleteExpense: data => dispatch(startDeleteExpense(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
