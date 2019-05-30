import React, { Component, Fragment } from 'react';
import api from '../../api';
import Axios from 'axios'
import { baseURL } from '../../api'

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
        this.setState({
          goals: goalzz
        })
      })
      .catch(err => console.log(err))
  }

  showTheGoals = () => {
    return this.state.goals.map((aGoal, i) => {
      return <div key={aGoal._id} id='card'>
        <h3 className='card-title'>{aGoal.name}</h3>
        <h4 className='card-subtitle'>Partnered with: {aGoal.partner}</h4>
        <h5 className='card-text'>Description: {aGoal.description}</h5>
        <h6 className='card-text'>Due Date: {aGoal.date}</h6>
        <button onClick={() => this.deleteGoal(aGoal._id, i)} className="btn btn-primary" >Delete</button>
      </div>
    })
  }

  // 'http://localhost:5000/api/mygoals/deleteGoal'

  deleteGoal = (id, i) => {
    console.log(id);
    api.deleteGoal(id)
      .then(result => {
        console.log('delete', result)
        let newGoals = [...this.state.goals]
        newGoals.splice(i, 1)
        this.setState({ goals: newGoals })
      })
  }


  render() {
    return (
      <Fragment className='wrap'>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h2 className='pad'>Welcome</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 card-deck">
                  {this.showTheGoals()}
                </div>
              </div>
            </div>
          </div>
        </div>


      </Fragment >
    );
  }

}