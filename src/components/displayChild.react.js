import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { Route, Link } from 'react-router';
import * as actions from "../actions/change_main.action";

export class DisplayChild extends Component {

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
		this.context.router.push('/update/' + entry._id );
	}

	render() {
		let entryList = "";
		if(!(typeof this.props.storage === "undefined")){
			entryList = this.props.storage.map((entry, index) => {
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
	return {
		storage: state.list.data.response
	};
}

export default connect(mapStateToProps, actions)(DisplayChild);
