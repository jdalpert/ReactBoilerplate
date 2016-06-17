import React, { Component } from 'react';
import Axios from 'axios';

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
		Axios.post("/api/v0/sample", obj)
			.then((serverResponse) => {
				this.props.callBack(serverResponse.data.response);
			});
		this.setState({name:"",address:"", quote:""});
	}

	render() {
		return (
			<div>
				<input type="text" name="name" placeholder="Name" 
					value={this.state.name} onChange={this._handleChange}/><br/><br/>
				<input type="text" name="address" placeholder="Address" 
					value={this.state.address} onChange={this._handleChange}/><br/><br/>
				<textarea name="quote" cols="50" rows="5" placeholder="Favorite Quote" 
					value={this.state.quote} onChange={this._handleChange}></textarea> 
				<br/><br/>
				<button type="button" onClick={this._handleClick}>Submit</button>
			</div>
		);  
	}
}
