import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/change_main.action";

export default class DisplayChild extends Component {

	constructor(props) {
		super(props);
		this.state = {
			storage: []
		}
	}
	
	componentDidMount(){
		this.props.grab_data();
	}

	_handleDelete = (_id) =>{
		this.props.delete_data(_id);
		this.props.grab_data();
	}


	render() {
		let entryList = "";
		if(!(typeof this.props.storage === "undefined")){
			entryList = this.props.storage.map((entry, index) => {  
			return(
					<tr 
						key={index}
						className="resultsEntry">
						<td>
						{entry.name}
						</td> 
						<td>
						{entry.address} 
						</td>
						<td>
						{entry.quote}
						</td> 
						<td>
						<button 
							type="button"
							className="editButton"> 
							Edit
						</button>
						<button 
							type="button"
							className="deleteButton"
							onClick={() => this._handleDelete(entry._id)}> 
							Delete
						</button>
						</td>
					</tr>);
			});
		}
		return (
			<div>
				<table
				className="resultsTable">
					<thead>
						<tr>
							<th>
							Name
							</th> 
							<th>
							Address
							</th>
							<th>
							Quote
							</th>
							<th>
							</th> 
						</tr>
					</thead>
					<tbody>
						{entryList}
					</tbody>
			</table>
			</div>
		);  
	}
}

function mapStateToProps(state) {
	return {
			storage: state.list.data.response
	};
}

export default connect(mapStateToProps, actions)(DisplayChild);
