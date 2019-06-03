import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>

        <div class="container-fluid page home-bg">
          <div class="row home-center">
            <div class="col-md-12">
              <div class="row">
                {/* <div class="col-md-4">
                </div> */}
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-12">
                      <h4>Promise is a goal tracking app. When you're ready make a promise to someone of your choice, but always keep your promise.</h4>
                      <br />
                      <h3 className='home-text marker'>Make A Promise To <span></span></h3>
                      <p className='home-text caveat'>Login or Sign Up to make a promise.</p>
                      <a href="./login" className='button marker' id='#button2'>Login</a>
                      <a href="./signup" className='button marker' id='#button1'>Sign Up</a>
                    </div>
                  </div>
                </div>
                {/* <div class="col-md-4">
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
