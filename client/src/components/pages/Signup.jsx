import React, { Component, Fragment } from 'react';
import api from '../../api';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <Fragment>

        <div class="container-fluid home-bg">
          <div class="row home-center">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 className='align-stuff marker'>Sign Up</h2>
                      <form>
                        <div className='caveat'>
                          Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <div className='caveat'>
                          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <div className='caveat'>
                          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <button className='button align-stuff marker' id='button4' onClick={(e) => this.handleClick(e)}>Signup</button>
                      </form>
                      {this.state.message && <div className="info info-danger">
                        {this.state.message}
                      </div>}
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>

    );
  }
}