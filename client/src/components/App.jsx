import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import Nav from './modules/Nav'
import Browse from './pages/Browse'
import Dash from './pages/userdash'
import MyGoals from './pages/mygoals'
import GoalID from './pages/goalid'
import NewGoal from './pages/NewGoal'


export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     countries: []
  //   }
  // }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {


    console.log(

      api.isLoggedIn()
    )
    return (
      <div className="pad-app">
        <header>
          <Nav />
          {api.isLoggedIn() ?
            <button onClick={this.handleLogoutClick}>Log Out</button>
            : "show login here"
          }
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dash} />
          <Route path="/browse" component={Browse} />
          <Route path="/mygoals" component={MyGoals} />
          <Route path="/newgoal" component={NewGoal} />
          <Route path="/goaldetails/:id" component={GoalID} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}