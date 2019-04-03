import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username: 'JMax'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
       <UserInput 
       changed={this.usernameChangedHandler}
       currentName={this.state.username}/>
       <UserOutput userName={this.state.username}/>
       <UserOutput userName='Phil'/>
       <UserOutput userName='Mikaela'/>
      </div>
    );
  }
}

export default App;
