import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set the default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'DELETE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('should not remove expense with invalid id', () => {
    const action = {
        type: 'DELETE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//should add expense
test('should add expense', () => {
    const expense = {
        id: '5',
        note: 'Added one',
        amount: 500,
        createdAt: 50,
        description: 'Newest Note'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

//should edit expense
test('should edit expense', () => {
    const updates = {
        note: 'Updated note!!',
        description: 'Updated Description!'
    };
    const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        { ...expenses[0], ...updates },
        expenses[1],
        expenses[2],
        expenses[3]
    ]);
});
//should not edit expense with invalid id
test('should edit expense', () => {
    const updates = {
        note: 'Updated note!!',
        description: 'Updated Description!'
    };
    const action = { type: 'EDIT_EXPENSE', id: -1, updates };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should override existing and set expenses', () => {
    const action = { type: 'SET_EXPENSES', expenses };
    const state = expensesReducer([expenses[1]], action);

    expect(state).toEqual(expenses);
});
