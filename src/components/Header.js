import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const HeaderComponent = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="active">
            Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="active">
            Create Expense
        </NavLink>
        <NavLink to="/help" activeClassName="active">
            Help
        </NavLink>
        <button onClick={startLogout} id="logoutBtn">
            Logout
        </button>
    </header>
);

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(HeaderComponent);
