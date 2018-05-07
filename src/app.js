import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux'; //provider allows us to share the store with each component
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

//Can import things that are used in multiple places in app.js
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('appRoot'));

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('appRoot'));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('logged in', user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        console.log('logged out');
        //navigate to login page
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

// store.dispatch(
//     addExpense({
//         description: 'Phone Bill',
//         amount: 1000,
//         createdAt: 100
//     })
// );
// store.dispatch(
//     addExpense({
//         description: 'Water Bill',
//         amount: 500,
//         createdAt: 1000
//     })
// );
// store.dispatch(
//     addExpense({
//         description: 'Mortgage Bill',
//         amount: 10000,
//         createdAt: 101
//     })
// );
// store.dispatch(
//     addExpense({
//         description: 'Grocery Bill',
//         amount: 55,
//         createdAt: 0
//     })
// );
// store.dispatch(
//     addExpense({
//         description: 'Something Bill',
//         amount: 501,
//         createdAt: 105
//     })
// );
// store.dispatch(setTextFilter(''));
