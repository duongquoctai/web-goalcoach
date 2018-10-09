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
        {
          this.props.completeGoals.map((goal, index) => {
            const { title, email } = goal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <h3>Clear All</h3>
        <button
          onClick={() => this.clearAllCompleted()}
        >
          Clear All Completed
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