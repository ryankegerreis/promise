import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <Fragment className='nav-fix'>
        <nav className='navbar navbar-light bg-light navbar-expand-lg fixed-top nav-fix'>
          <ul className='navbar-nav'>
            <li className='nav-item p-2'><Link className='text-dark' to={'/'}>Home</Link></li>
            <li className='nav-item p-2'><Link className='text-dark' to={'/login'}>Log In</Link></li>
            <li className='nav-item p-2'><Link className='text-dark' to={'/signup'}>Sign Up</Link></li>
            <li className='nav-item p-2'><Link className='text-dark' to={'/dashboard'}>Dashboard</Link></li>
            <li className='nav-item p-2'><Link className='text-dark' to={'/browse'}>Browse</Link></li>
            <li className='nav-item p-2'><Link className='text-dark' to={'/mygoals'}>My Goals</Link></li>
            <li className='nav-item p-2'><Link className='text-dark' to={'/newgoal'}>New Goal</Link></li>
          </ul>
        </nav>
      </Fragment >
    )
  }
}