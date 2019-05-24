import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-bg">

          <div className='center' id='button-container'>
            <h3 className='home-text'>Welcome To Promise.</h3>
            <p className='home-text'>Login or Sign Up to make a promise.</p>
            <a href="./login" className='button' id='#button2'>Login</a>
            <a href="./signup" className='button' id='#button1'>Sign Up</a>


          </div>


        </div>

      </Fragment>
    )
  }
}
