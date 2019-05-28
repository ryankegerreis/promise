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
        <div className='page'>
          {/* Style with bootstrap cards */}
          <h2>My Goals</h2>
          <div className='card-deck'>
            <div className='card'>
              <div className='card-body'>
                {this.state.goals.map((aGoal, i) => <div key={aGoal._id}>
                  <div className='card-title'>{aGoal.name}</div>
                  <div className='card-subtitle'>{aGoal.partner}</div>
                  <div className='card-text'>{aGoal.description}</div>
                  <div className='card-text'>{aGoal.date}</div>
                  <button onClick={() => this.deleteGoal(aGoal._id, i)} className="btn btn-primary" >Delete</button>
                </div>)}
              </div>
            </div>
          </div>
        </div >
      </Fragment >
    );
  }

}