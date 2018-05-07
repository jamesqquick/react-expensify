import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpense, startDeleteExpense, history, wrapper, match;

beforeEach(() => {
    startEditExpense = jest.fn();
    startDeleteExpense = jest.fn();
    history = { push: jest.fn() };
    match = {
        params: {
            id: expenses[0].id
        }
    };

    wrapper = shallow(
        <EditExpense
            startEditExpense={startEditExpense}
            startDeleteExpense={startDeleteExpense}
            expense={expenses[0]}
            history={history}
            match={match}
        />
    );
});

test('should render create expense page properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(
        expenses[0].id,
        expenses[0]
    );
});

test('should handle delete expense', () => {
    wrapper.find('#startDeleteExpenseBtn').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startDeleteExpense).toHaveBeenCalledWith(expenses[0].id);
});
