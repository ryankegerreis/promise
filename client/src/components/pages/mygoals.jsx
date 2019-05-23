import React, { Component, Fragment } from 'react';
import api from '../../api';

export default class MyGoals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* Style with bootstrap cards */}
          <h2>My Goals</h2>
          {this.state.goals.map(aGoal => <li key={aGoal._id}>{aGoal.name} {aGoal.partner} {aGoal.date} {aGoal.description}</li>)}
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    api.getGoals()
      .then(goalzz => {
        console.log(goalzz)
        this.setState({
          goals: goalzz
        })
      })
      .catch(err => console.log(err))
  }
}