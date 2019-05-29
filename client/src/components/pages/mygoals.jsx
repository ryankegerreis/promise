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
  componentDidMount() {
    api.getMyGoals()
      .then(goalzz => {
        console.log(goalzz)
        this.setState({
          goals: goalzz
        })
      })
      .catch(err => console.log(err))
  }

  showTheGoals = () => {
    return this.state.goals.map((aGoal, i) => {
      return <div key={aGoal._id} className='card'>
        <h3 className='card-title'>{aGoal.name}</h3>
        <h4 className='card-subtitle'>Partnered with: {aGoal.partner}</h4>
        <h5 className='card-text'>Description: {aGoal.description}</h5>
        <h6 className='card-text'>Date Created: {aGoal.date}</h6>
        {/* <button onClick={() => this.deleteGoal(aGoal._id, i)} className="btn btn-primary" >Delete</button> */}
      </div>
    })
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
        <h2>My Goals</h2>
        <div className='card-deck'>
          {this.showTheGoals()}
        </div>
      </Fragment >
    );
  }

}