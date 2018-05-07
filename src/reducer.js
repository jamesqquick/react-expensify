import { combineReducers, createStore } from 'redux';
import uuid from 'uuid';

const addExpense = ({
    description = '',
    note = '',
    amount = '',
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const deleteExpense = ({ id = -1 } = {}) => ({
    type: 'DELETE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'DELETE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(item => {
                return item.id === action.id
                    ? { ...item, ...action.updates }
                    : item;
            });
        default:
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = date => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = date => ({
    type: 'SET_END_DATE',
    date
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' };
        case 'SET_START_DATE':
            return { ...state, startDate: action.date };
        case 'SET_END_DATE':
            return { ...state, endDate: action.date };
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

const e1 = store.dispatch(
    addExpense({ description: 'Rent', amount: 1, createdAt: 125 })
);
const e2 = store.dispatch(
    addExpense({ description: 'Coffee', amount: 10, createdAt: 115 })
);

//Delete one
//console.log('Deleting uuid:', e1.expense.id);
//store.dispatch(deleteExpense({ id: e1.expense.id }));

//store.dispatch(editExpense(e2.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('coffee'));
//store.dispatch(setTextFilter());

//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(100));
//store.dispatch(setEndDate(125));
