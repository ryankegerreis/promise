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
        console.log(goalzz, 2452452345)
        this.setState({
          goals: goalzz
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Fragment>
        <div className='page'>
          {/* Style with bootstrap cards */}
          <h2>Browse All Goals</h2>
          <div className='card-deck'>
            <div className='card'>
              <div className='card-body'>
                {this.state.goals.map((aGoal, i) => <div key={aGoal._id}>
                  <div className='card-title'>{aGoal.name}</div>
                  <div className='card-subtitle'>{aGoal.partner}</div>
                  <div className='card-text'>{aGoal.description}</div>
                  <div className='card-text'>{aGoal.date}</div>
                  <Link to={`/goaldetails/${aGoal._id}`}>Details</Link>
                </div>)}
              </div>
            </div>
          </div>
        </div >
      </Fragment >
    );
  }
}
