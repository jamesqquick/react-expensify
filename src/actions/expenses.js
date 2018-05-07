import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense
});

//returning a function thanks to THUNK
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = '',
            createdAt = ''
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        return database
            .ref(`users/${uid}/expenses`)
            .push(expense)
            .then(ref => {
                console.log('Expense saved to firebase successfully', ref);
                dispatch(
                    addExpense({
                        id: ref.key,
                        ...expense
                    })
                );
            });
    };
};

export const deleteExpense = ({ id = -1 } = {}) => ({
    type: 'DELETE_EXPENSE',
    id
});

export const startDeleteExpense = (id = -1) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(deleteExpense({ id }));
            });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database
            .ref(`users/${uid}/expenses/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            });
    };
};

export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database
            .ref(`users/${uid}/expenses`)
            .once('value')
            .then(snapshot => {
                const expenses = [];
                snapshot.forEach(childSnap => {
                    expenses.push({
                        ...childSnap.val(),
                        id: childSnap.key
                    });
                });
                dispatch(setExpenses(expenses));
            });
    };
};
