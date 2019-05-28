import React, { Component, Fragment } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

export default class GoalID extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goalzz: {}
    }
  }


  componentDidMount() {
    console.log(this.props.match.params.id)
    // console.log('The Goal ID is', this.props.match.params.id)
    console.log(this)
    api.getTheGoal(this.props.match.params.id)
      .then(goalzz => {
        console.log(goalzz)
        this.setState({
          goalzz
        })
        console.log(this)
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Fragment>
        <div className='page'>
          <h2>The Goal Details</h2>
          <div className='card-deck'>
            <div className='card'>
              <div className='card-body'>
                {this.state.goalzz.name}
              </div>
            </div>
          </div>
        </div >
      </Fragment>
    )
  }
}
