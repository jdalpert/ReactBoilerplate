import React, { Component } from 'react';

export default class Child extends Component {

	constructor(props) {
		super(props);
		this.state = {
				name:"",
				address:"",
				quote: "",
		};
	}

	_handleChange = (event) =>{
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	}

	_handleClick = () =>{
		let obj = this.state;
		console.log(obj);
	}

	render() {
		return (
			<div className="child">
				<input type="text" name="name" placeholder="name" 
					onChange={this._handleChange}/><br/>
				<input type="text" name="address" placeholder="address" 
					onChange={this._handleChange}/><br/>
				<input type="text" name="quote" placeholder="quote" 
					onChange={this._handleChange}/><br/>

				<button type="button" onClick={this._handleClick}>Submit</button>
			</div>
		);  
	}
}
