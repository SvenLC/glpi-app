import React, { Component } from 'react';

import './index.css'

export default class LoginForm extends Component {
    state = {
        url:'',
        username: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { url, username, password } = this.state;
        this.props.onConnectionRequest({ url: url, username: username, password: password });
    }
    
    handleUrlChange = (e) => {
        this.setState({ url: e.target.value });
    }

    handleLoginChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        console.log('state', this.state);
        return (    
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="LabelText">
                    <label>
                        Url : 
                        <input
                            type="text"
                            onChange={this.handleUrlChange}
                            value={this.state.url}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Login : 
                        <input
                            type="text"
                            onChange={this.handleLoginChange}
                            value={this.state.username}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password : 
                        <input
                            type="password"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        />
                    </label>
                </div>

                    <button>Login</button>
                </form>
            </div>
        );
    }
}
