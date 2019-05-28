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

  showAllTheGoals = () => {
    return this.state.goals.map((aGoal, i) => {
      return <div key={aGoal._id} className='card'>
        {/* <img src={aGoal.image_url} className='card-img-top img-fit' /> */}
        <h3 className='card-title'>{aGoal.name}</h3>
        <h4 className='card-subtitle'>Partnered with: {aGoal.partner}</h4>
        <h5 className='card-text'>Description: {aGoal.description}</h5>
        <h6 className='card-text'>Date Created: {aGoal.date}</h6>
        <Link to={`/goaldetails/${aGoal._id}`}>Details</Link>
      </div>
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Browse All Goals</h2>
        <div className='card-deck'>
          <div className='card-columns'>
            {this.showAllTheGoals()}
          </div>
        </div>
      </Fragment >
    );
  }
}
