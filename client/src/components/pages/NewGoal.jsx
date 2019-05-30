import React, { Component, Fragment } from 'react';
import api from '../../api';
import Axios from 'axios';
Axios.defaults.withCredentials = true;

export default class NewGoal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      partner: "",
      description: "",
      date: null
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
    let theGoal = {
      name: this.state.name,
      partner: this.state.partner,
      date: this.state.date,
      description: this.state.description,
    }
    api.saveGoal(theGoal)
    this.props.history.push("/mygoals") // Redirect to the home page

  }

  render() {
    return (
      <Fragment className="page home-bg">

        <div class="container-fluid home-bg">
          <div class="row newgoal-center">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>Make A New Promise</h2>
                      <form>
                        <div>
                          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <div>
                          Partner: <input type="text" value={this.state.partner} name="partner" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <div>
                          Due Date: <input type="date" value={this.state.date} name="date" onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <div>
                          Description: <textarea value={this.state.description} name="description" cols="30" rows="10" onChange={this.handleInputChange} ></textarea>
                        </div>
                        <br />
                        <div>
                          <button className='button' id='button5' onClick={(e) => this.handleClick(e)}>Add A Goal</button>
                        </div>
                      </form>
                      {this.state.message && <div className="info">
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