import React, { Component, Fragment } from 'react'

export default class SignUp extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    user: null,
  }


  addUser = (e) => {
    e.preventDefault()

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    console.log(newUser)

    let theUser = [...this.state.user]
    theUser.push(newUser)
    this.setState({
      user: theUser
    })
  }


  render() {
    return (
      <Fragment>
        <form>
          <label> Name:
            <input type="text" name="name" value={this.state.name} />
          </label>
          <label> Email:
            <input type="text" name="email" value={this.state.email} />
          </label>
          <label> Password:
            <input type="text" name="password" value={this.state.password} />
          </label>
          <input type="submit" value="Submit" value={this.state.value} />
        </form>
      </Fragment>
    )
  }
}
