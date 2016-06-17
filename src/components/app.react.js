import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';
import DisplayChild from './displayChild.react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: []

    };
  }

  componentDidMount() {
    Axios.get("/api/v0/sample")
      .then((obj) => {
        this.setState({
          response: obj.data.response
        });
      });
  }

  _callBack = (obj) => {
      this.setState({response : obj});
  }


  render() {
    return (
      <div className="container">
        <br/>
        <h1> Node JS Testing </h1>
        <br/>
        <Child callBack = {this._callBack} /><br/>
        <div>Response Text:</div><br/>
        <DisplayChild response = {this.state.response}/><br/>
      </div>
    );
  }
}
