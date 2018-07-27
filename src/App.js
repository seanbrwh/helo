import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import Nav from './components/Nav/Nav'



class App extends Component {
  render() {
    return (
      <div className="App">
      {Routes}
      <Nav/>
      </div>
    );
  }
}

export default App;
