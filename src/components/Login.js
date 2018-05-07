import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <button onClick={startLogin} id="loginBtn">
                    Login
                </button>
            </form>
        );
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.startLogin(this.state.email, this.state.password);
    };
}

const mapDispatchToProps = dispatch => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
