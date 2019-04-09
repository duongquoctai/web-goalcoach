import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }

  render() {
    const { email, title } = this.props.goal;
    return(
      <tr>
        <td><em>{title}</em></td>
        <td><em>{email}</em></td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => this.completeGoal()}
          >
            Complete
          </button>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);