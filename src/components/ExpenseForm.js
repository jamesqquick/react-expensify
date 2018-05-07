import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : '0',
            note: props.expense ? props.expense.note : '',
            createdAt: moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = e => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = e => {
        const amount = e.target.value;
        //start with - caret
        // \d digit, * for any amount
        //optional stuff in parenthesis followed by question mark
        //ends with - dollar sign
        const regex = /^\d{1,}(\.\d{0,2})?$/;
        if (!amount || amount.match(regex)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = createdAt => {
        //dont allow to clear date
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onDateFocusChanged = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onFormSubmit = e => {
        e.preventDefault();
        //Check description and amount
        if (!this.state.description || !this.state.amount) {
            //Set error
            this.setState(() => ({
                error: 'Make sure to fill in description and amount.'
            }));
        } else {
            //Clear error
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onDateFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={day => false}
                    />
                    <textarea
                        placeholder="Add a note for expense"
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;
