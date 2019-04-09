import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGoals } from '../actions';
import { goalRef } from '../firebase';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap =>  {
      let goals = [];

      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey});
      })

      this.props.setGoals(goals);
    })
  }

  render() {    
    return(
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
            this.props.goals.map((goal, index) => {
              return(
                <GoalItem key={index} goal={goal}/>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
