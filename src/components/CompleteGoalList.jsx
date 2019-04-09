import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleteGoals } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title});
      })
      this.props.setCompleteGoals(completeGoals);
    })
  }

  clearAllCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Goal</th>
              <th>Submitted by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.completeGoals.map((goal, index) => {
                const { title, email } = goal;
                return (
                  <tr key={index}>
                    <td><em>{title}</em></td>
                    <td><em>{email}</em></td>
                    <td></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <hr />
        <h3>Clear All</h3>
        <button
          className="btn btn-primary"
          onClick={() => this.clearAllCompleted()}
        >
          Clear All Completed!
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleteGoals })(CompleteGoalList);