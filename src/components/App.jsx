import React, { Component } from 'react';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  render() {
    return(
      <div className="container">
        <h3>Add Goal</h3>
        <AddGoal />
        <hr />
        <h3>Goals List</h3>
        <GoalList />
        <hr />
        <h3>Complete Goals List</h3>
        <CompleteGoalList />
      </div>
    )
  }
}

export default App;
