import React, { Component } from 'react';
import classes from './App.css';
import ComponentA from './ComponentA/ComponentA';
import ComponentB from './ComponentB/ComponentB';
import ComponentC from './ComponentC/ComponentC';

class App extends Component {
  state = {
    doesShow: true
  }
  toggleComponents = () =>{
    this.setState(prevState=>{
      let lastState = {...prevState};
      return {doesShow : !lastState.doesShow}
    })
  }
  render() {
    let componentsToShow = null;
    let classesAssigned = classes.lightgreen;
    let joinedClasses = [classes.backgroundColorYellow, classes.colorOrange]
    if(this.state.doesShow){
      componentsToShow = (
        <div>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      );
      classesAssigned = classes.red;
    }
    return (
      <div className={classes.App}>
        <button className = {classesAssigned} onClick={this.toggleComponents}>App button - click to toggle Components</button>
        {componentsToShow}
        <p className={classes.salmon}>Hover over me</p>
        <p className={joinedClasses.join(' ')}>I'm styled using joining two css classes</p>
      </div>
    );
  }
}

export default App;
