import React, { Component, Fragment } from 'react';
import api from '../../api';
import Axios from 'axios'

export default class MyGoals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
  }


  deleteGoal = (id, i) => {
    console.log(id)
    Axios.post('http://localhost:5000/api/mygoals/deleteGoal', { id: id }).then(responseFromServer => {
      console.log(responseFromServer)
      let newGoals = [...this.state.goals]
      this.state.goals.splice(i, 1)
      this.setState({ newGoals })
    })
  }


  render() {
    return (
      <Fragment>
        <div>
          {/* Style with bootstrap cards */}
          <h2>My Goals</h2>
          {this.state.goals.map((aGoal, i) => <li key={aGoal._id}>{aGoal.name} {aGoal.partner} {aGoal.date} {aGoal.description}<button onClick={() => this.deleteGoal(aGoal._id, i)} className="btn btn-primary" >Delete</button></li>)}
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