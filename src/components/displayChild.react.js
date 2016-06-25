import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/change_main.action";

export default class DisplayChild extends Component {

	constructor(props) {
		super(props);
		this.state = {
			storage: []
		}
	}
	
	static contextTypes = {
		router: PropTypes.object
	};


	componentDidMount(){
		this.props.grab_data();
	}

	_handleDelete = (_id) =>{
		this.props.delete_data(_id);
		this.props.grab_data();
	}


	_handleEdit = (entry) =>{
		
		//let obj = {};
		//obj[event.target.name] = event.target.value;
		//console.log(entry);
		this.context.router.push('/update');
		//this.props.grab_entry(entry);
		//this.props.edit_data(entry);
		//this.props.grab_data();
	}

	render() {
		let entryList = "";
		//let entryNum = -1;
		if(!(typeof this.props.storage === "undefined")){
			entryList = this.props.storage.map((entry, index) => {
			//entryNum++;
			return(
					<tr 
						key={index}
						className="resultsEntry"
					>
						<td value={entry.name}>
							{entry.name}
						</td> 
						<td value={entry.address}>
							{entry.address} 
						</td>
						<td value={entry.quote}>
							{entry.quote}
						</td> 
						<td>
						<button 
							type="button"
							className="editButton"
							onClick={() => this._handleEdit(entry)}
						>
							Edit
						</button>
						<button 
							type="button"
							className="deleteButton"
							onClick={() => this._handleDelete(entry._id)}
						>
							Delete
						</button>
						</td>
					</tr>);
			});
		}
		return (
			<div>
				<table className="resultsTable">
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
	//if(!(typeof state.list.data.response === "undefined")){
		return {
			storage: state.list.data.response
		};
	/*}else{
		return {
			storage: state.list.data
		};
	}*/
}

export default connect(mapStateToProps, actions)(DisplayChild);
