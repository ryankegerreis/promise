import React, { Component } from 'react';
import api from '../../api';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
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
    api.login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/dashboard") // Redirect
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      // <div className="page home-bg">
      //   <div className='center'>
      //     <div className='login-box'>
      //       <h2 className='home-text'>Login</h2>
      //       <form>
      //         <div className='home-text'>
      //           Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />
      //         </div>
      //         <br />
      //         <div>
      //           <div className='home-text'>
      //             Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
      //           </div>
      //           <br />
      //           <button className='button' id='button3' onClick={(e) => this.handleClick(e)}>Login</button>
      //         </div>
      //       </form>
      //       {this.state.message && <div className="info info-danger">
      //         {this.state.message}
      //       </div>}
      //     </div>
      //   </div>
      // </div >


      <div class="container-fluid home-bg">
        <div class="row home-center">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4">
              </div>
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-12">
                    <h2 className='home-text'>Login</h2>
                    <form>
                      <div className='home-text'>
                        Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />
                      </div>
                      <br />
                      <div>
                        <div className='home-text'>
                          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <button className='button' id='button3' onClick={(e) => this.handleClick(e)}>Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
