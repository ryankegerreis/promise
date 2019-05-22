import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav className='navbar'>
          <div>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/login'}>Log In</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>
              <li><Link to={'/dashboard'}>Dashboard</Link></li>
              <li><Link to={'/browse'}>Browse</Link></li>
              <li><Link to={'/mygoals'}>My Goals</Link></li>
              {/* <li><Link to={' /'}>Home</Link></li> */}
            </ul>
          </div>
        </nav>



      </Fragment >
    )
  }
}