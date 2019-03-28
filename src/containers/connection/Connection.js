import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from '../../components/loginForm';

class Connection extends Component {
    static defaultProps = {
        onConnectionSuccess: () => {},
    };

    // auth : { username, password };
    handleConnectionRequest = async (auth) => {
        console.log(auth.url);
        try {
            const { data } = await axios.post(auth.url + '/apirest.php/initSession', {}, {
                auth
            });

            localStorage.setItem('token', data.session_token);
            localStorage.setItem('url', auth.url);
            this.props.onConnectionSuccess();
        } catch(error) {
            console.error(error);
        }
        
    }
    
    render () {
        console.log(this.props.isActive);
        return (
            <div>
                <LoginForm
                    onConnectionRequest={this.handleConnectionRequest}
                />                      
            </div>
        )
    }
  
};

export default Connection;