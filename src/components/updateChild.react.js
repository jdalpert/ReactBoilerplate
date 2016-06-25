import React, { Component , PropTypes } from 'react';
import { connect } from "react-redux";
import { Route, Link } from 'react-router';
import * as actions from "../actions/change_main.action";

export default class UpdateChild extends Component {

	constructor(props) {
		super(props);
		this.state = {
				name:"",
				address:"",
				quote: "",
		};
	}

	static contextTypes = {
		router: PropTypes.object
	};

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

	//add new page that grabs the data and put the data into the state and change the submit button to a save button
	componentWillReceiveProps(test){
		if((test.data.length === 1)){
			console.log(test);
			this.setState({name: test.data[0].name, address: test.data[0].address, quote: test.data[0].quote});
		}
	}

	render() {
		return (
			<div>
				<input 
					type="text" 
					name="name" 
					placeholder="Name" 
					value={this.state.name} 
					onChange={this._handleChange} 
				/>
				<br/>
				<br/>
				<input 
					type="text" 
					name="address"
					placeholder="Address" 
					value={this.state.address} 
					onChange={this._handleChange} 
				/>
				<br/>
				<br/>
				<textarea 
					name="quote" 
					cols="50" 
					rows="5" 
					placeholder="Favorite Quote" 
					value={this.state.quote} 
					onChange={this._handleChange} 
				/>
				<br/>
				<br/>	
				<button 
					type="button"
					className="submitButton" 
					onClick={this._handleClick} 
				>
					Update
				</button>
			<h1>this</h1>
			</div>
		);  
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data.response
	};
}

export default connect(mapStateToProps, actions)(UpdateChild);
