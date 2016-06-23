import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/change_main.action";

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
		this.props.change_main(this.state);
		this.setState({
			name:"",
			address:"", 
			quote:""
		});
	}

	render() {
		return (
			<div>
				<input 
					type="text" 
					name="name" 
					placeholder="Name" 
					value={this.state.name} 
					onChange={this._handleChange}/>
				<br/>
				<br/>
				<input 
					type="text" 
					name="address" 
					placeholder="Address" 
					value={this.state.address} 
					onChange={this._handleChange}/>
				<br/>
				<br/>
				<textarea 
					name="quote" 
					cols="50" 
					rows="5" 
					placeholder="Favorite Quote" 
					value={this.state.quote} 
					onChange={this._handleChange}/>
				<br/>
				<br/>	
				<button 
					type="button"
					className="submitButton" 
					onClick={this._handleClick}>Submit
				</button>
			</div>
		);  
	}
}

function mapStateToProps(state) {
	return {
		data: state.list
	};
}

export default connect(mapStateToProps, actions)(Child);
