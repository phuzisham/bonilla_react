import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bonilla Bucks</h1>
        </div>
        <div className="User-list">
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
