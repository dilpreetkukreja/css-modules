import React, { Component } from 'react';
import './App.css';
import ComponentA from './ComponentA/ComponentA';
import ComponentB from './ComponentB/ComponentB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

export default App;
