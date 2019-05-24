import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <Fragment className='nav-fix nav-text'>
        <nav className='navbar navbar-expand-lg fixed-top nav-fix'>
          <ul className='navbar-nav'>
            <li className='nav-item p-2'><Link className='nav-text' to={'/'}>Home</Link></li>
            <li className='nav-item p-2'><Link className='nav-text' to={'/login'}>Log In</Link></li>
            <li className='nav-item p-2'><Link className='nav-text' to={'/signup'}>Sign Up</Link></li>
            <li className='nav-item p-2'><Link className='nav-text' to={'/dashboard'}>Dashboard</Link></li>
            <li className='nav-item p-2'><Link className='nav-text' to={'/browse'}>Browse</Link></li>
            <li className='nav-item p-2'><Link className='nav-text' to={'/mygoals'}>My Goals</Link></li>
            <li className='nav-item p-2'><Link className='nav-text' to={'/newgoal'}>New Goal</Link></li>
          </ul>
        </nav>
      </Fragment >
    )
  }
}