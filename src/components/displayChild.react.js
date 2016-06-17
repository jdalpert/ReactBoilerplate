import React, { Component } from 'react';
import Axios from 'axios';

export default class DisplayChild extends Component {

	constructor(props) {
		super(props);
		this.state = {
			storage: []
		}
	}

	render() {
		let entryList = this.props.response.map((entry, index) => {  
			return(<div key={index}>{entry.name} {entry.address} {entry.quote}</div>);
		});
		return (
			<div>{entryList}</div>
		);  
	}
}
