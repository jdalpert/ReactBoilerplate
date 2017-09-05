import React, { Component , PropTypes } from 'react';
import { connect } from "react-redux";
import { Route, Link } from 'react-router';
import * as actions from "../actions/change_main.action";

export class UpdateChild extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		return (
			<div>
				EDIT THIS ID {this.props.params.id}
				<br />
				<Link to='/'><button>Back</button></Link>
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
