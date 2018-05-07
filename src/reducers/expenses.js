const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
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
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};
