import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';

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
        <h1>
          Node JS Testing
        </h1>
          <br/>
          {this.props.children}
        <br/>
      </div>
    );
  }
}
