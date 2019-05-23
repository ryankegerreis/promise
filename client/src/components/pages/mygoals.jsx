import React, { Component, Fragment } from 'react';
import api from '../../api';

export default class MyGoals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <h2>My Goals</h2>
          {this.state.countries.map(c => <li key={c._id}>{c.name}</li>)}
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    api.getCountries()
      .then(countries => {
        console.log(countries)
        this.setState({
          countries: countries
        })
      })
      .catch(err => console.log(err))
  }
}