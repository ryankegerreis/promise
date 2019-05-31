import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import api from '../../api'

export default class Nav extends Component {


  handleLogoutClick(e) {
    api.logout()
  }


  render() {
    return (
      <Fragment className='nav-fix nav-text'>
        <nav className='navbar navbar-expand-lg fixed-top nav-fix'>
          <ul className='navbar-nav'>
            <li className='nav-item p-2 marker'><Link className='nav-text' to={'/'}>Home</Link></li>
            <li className='nav-item p-2 marker'><Link className='nav-text' to={'/login'}>Log In</Link></li>
            <li className='nav-item p-2 marker'><Link className='nav-text' to={'/signup'}>Sign Up</Link></li>
            <li className='nav-item p-2 marker'><Link className='nav-text' to={'/browse'}>Browse</Link></li>
            <li className='nav-item p-2 marker'><Link className='nav-text' to={'/mygoals'}>My Promises</Link></li>
            <li className='nav-item p-2 marker'><Link className='nav-text' to={'/newgoal'}>New Promise</Link></li>
            <li className='nav-item p-2 marker' id='link-fix'>{api.isLoggedIn() ?
              <div className='nav-item p-2' onClick={this.handleLogoutClick}><Link className='nav-text' to='/'>Log Out</Link></div>
              : ""}</li>
          </ul>
        </nav>
      </Fragment >
    )
  }
}