import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';
import DisplayChild from './displayChild.react';
//require ('../style/style.css');
//import styles from './styles/style.css'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: []

    };
  }
  
  render() {
    return (
      <div className="applicationFields">
        <br/>
        <h1> Node JS Testing </h1>
        <br/>
        <Child/>
        <br/>
        <DisplayChild/>
        <br/>
      </div>
    );
  }
}

