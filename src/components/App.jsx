import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  render() {
    return(
      <div>
        <h3>Add Goal</h3>
        <AddGoal />
        <br />
        <h3>Goal List</h3>
        <GoalList />
        <hr />
        <h3>Complete Goal List</h3>
        <CompleteGoalList />
      </div>
    )
  }
}

export default App;