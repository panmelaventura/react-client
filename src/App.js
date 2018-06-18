import React, { Component } from 'react';
import logo from './logo.svg';
import Restaurant from './components/Restaurants'
import './App.css';
import Header from './components/Header';
import User from './business/vo/User';

class App extends Component {
constructor(props){
  super(props);
}

componentDidMount() {
  this.setState({ ...this.state, user: this.getUser()});
}

getUser() {
  let user = new User();
  user.name = "Famoso usuário";
  user.profile = "Admin";
  return user;
}

  render() {
    return (
      <div className="App">
       <Header user={(this.state && this.state.user) ? this.state.user : ''} /> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Restaurant  />
      </div>
    );
  }
}

export default App;
