import React, { Component } from 'react';

import './App.css';
import Dashboard from './containers/dashboard/Dashboard';
import Connection from './containers/connection/Connection';

class App extends Component {

  state = {
    url: null,    
    auth: false,
    dummy: 'dummy'
  }

  handleConnectionSuccess = () => {
    this.setState({ auth: true });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: false });
  }

  renderContent = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Connection onConnectionSuccess={this.handleConnectionSuccess} />;
    }

    return <Dashboard />;
  }

  render() {
    const { auth } = this.state;
    return (
      <div className="App">
        {auth && (
          <div onClick={this.handleLogout}>Logout</div>
        )}
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
