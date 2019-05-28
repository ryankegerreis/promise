import React, { Component, Fragment } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

export default class GoalID extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
  }


  componentDidMount() {
    console.log('The Goal ID is', this.props.match.params.id)
    api.getTheGoal(this.props.match.params.id)
      .then(goalzz => {
        // console.log(goalzz)
        this.setState({
          goals: goalzz
        })
        // console.log('test')
      })
      .catch(err => console.log(err))
  }




  render() {
    // console.log(this.state.goals)
    return (
      <Fragment>
        <div className='page'>
          {/* Style with bootstrap cards */}
          <h2>The Goal Details</h2>
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
      </Fragment>
    )
  }
}
