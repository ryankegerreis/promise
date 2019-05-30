import React, { Component, Fragment } from 'react'
import api from '../../api'
import Comment from '../modules/Comment'
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

  showAGoal = () => {
    return (
      <div className='card caveat'>
        <h3 className='card-title'>{this.state.goalzz.name}</h3>
        <h4 className='card-subtitle'>Partnered with: {this.state.goalzz.partner}</h4>
        <h5 className='card-text'>Description: {this.state.goalzz.description}</h5>
        <h6 className='card-text'>Date Created: {this.state.goalzz.date}</h6>
        {/* <button onClick={() => this.deleteGoal(aGoal._id)} className="btn btn-primary" >Delete</button> */}
      </div>
    )
  }

  handleClick(e) {
    e.preventDefault()
    let theGoal = {
      name: this.state.name,
      partner: this.state.partner,
      date: this.state.date,
      description: this.state.description,
    }
    api.saveGoal(theGoal)
    this.props.history.push("/mygoals") // Redirect to the home page
  }

  render() {
    return (
      <Fragment>
        <div className='pad goal-center'>
          {this.showAGoal()}
          <Comment {...this.props} />
          {/* <button >Join This Goal</button> */}
        </div >
      </Fragment>
    )
  }
}
