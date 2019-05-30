import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
export default class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
  }
  componentDidMount() {
    api.getGoals()
      .then(goalzz => {
        this.setState({
          goals: goalzz
        })
      })
      .catch(err => console.log(err))
  }

  showAllTheGoals = () => {
    return this.state.goals.map((aGoal, i) => {
      return <div key={aGoal._id} className='card caveat' id='card2'>
        <div className='row'>
          <div class='col-md-12 card rounded-lg'>
            <h3 className='card-title'>{aGoal.name}</h3>
            <h4 className='card-subtitle'>Partnered with: {aGoal.partner}</h4>
            <h5 className='card-text'>Description: {aGoal.description}</h5>
            <h6 className='card-text'>Date Created: {aGoal.date}</h6>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button className="btn-primary wideload marker rounded-lg" ><Link className='white-text' to={`/goaldetails/${aGoal._id}`}>Details</Link></button>
          </div>
        </div>
      </div>
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
                  <h2 className='pad marker'>Check Out Everyones Promises</h2>
                  <h4 className='marker'>Get inspired or cheer them on!</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 card-deck">
                  {this.showAllTheGoals()}
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