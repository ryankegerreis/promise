import React, { Component, Fragment } from 'react'
import api from '../../api'
import Comment from '../modules/Comment'
import { Link } from 'react-router-dom'
import moment from 'moment'

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
      })
      .catch(err => console.log(err))
  }

  showAGoal = () => {

    let newDate = this.state.goalzz.date

    return (

      <div className='card caveat'>
        <h3 className='card-title marker'>{this.state.goalzz.name}</h3>
        <h4 className='card-subtitle'>Partnered with: {this.state.goalzz.partner}</h4>
        <h5 className='card-text'>Description: {this.state.goalzz.description}</h5>
        <h6 className='card-text'>Date Created: {moment(newDate).format('MM DD YYYY')}</h6>
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
