import React, { Component, Fragment } from 'react';
import api from '../../api';
import Browse from './Browse'
import { Link } from 'react-router-dom';

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
        <div className='row'>
          <div class='col-md-12 card rounded-lg'>
            <h3 className='card-title caveat'>{aGoal.name}</h3>
            <h4 className='card-subtitle caveat'>Partnered with: {aGoal.partner}</h4>
            <h5 className='card-text caveat'>Description: {aGoal.description}</h5>
            <h6 className='card-text caveat'>Due Date: {aGoal.date}</h6>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <button className="btn-primary wideload marker rounded-lg" ><Link className='white-text' to={`/goaldetails/${aGoal._id}`}> Details</Link></button>
          </div>
          <div className='col-md-4'>
            <button className="btn-success wideload marker rounded-lg" ><Link className='white-text' to={'/editgoal/:id'}> Update</Link></button>
          </div>
          <div className='col-md-4 marker'>
            <button onClick={() => this.deleteGoal(aGoal._id, i)} className="btn-danger wideload rounded-lg"  >Delete</button>
          </div>
        </div>
      </div>
    })
  }

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
      <Fragment>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h2 className='pad marker'>Welcome To Your Dashboard</h2>
                  <h4 className='marker'>These are the promises you've made.</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 card-deck">
                  {this.showTheGoals()}
                </div>
                <div class="row">
                  <div class="col-md-6">
                  </div>
                  <div class="col-md-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Fragment >
    );
  }

}