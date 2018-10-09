import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	addGoal() {
		const { title } = this.state;
		const { email } = this.props.user;
		goalRef.push({email: 'email', title});
	}

	render() {
		return(
			<div>
				<input
					onChange={event => this.setState({title: event.target.value})}
					type="text"
					placeholder="Title"
				/>

				<button
					onClick={() => this.addGoal()}
				>
					Add Goal
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	}
}

export default connect(mapStateToProps, null)(AddGoal);