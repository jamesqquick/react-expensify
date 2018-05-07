import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/Dashboard';
import CreateComponent from '../components/CreateExpense';
import EditComponent from '../components/EditExpense';
import NotFoundPageComponent from '../components/NotFound';
import HelpComponent from '../components/Help';
import LoginPage from '../components/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboard} />

                <PrivateRoute path="/create" component={CreateComponent} />
                <PrivateRoute path="/edit/:id" component={EditComponent} />
                <Route component={NotFoundPageComponent} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
