import React, { Component, Fragment } from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import Home from './Components/home'
import Nav from './Components/nav'
import Browse from './Components/browse'
import SignUp from './Components/signup'
import Login from './Components/login'
import MyGoals from './Components/mygoals'
import UserDash from './Components/userdash'
import GoalID from './Components/goalid'


function App() {

  //Axios Stuff
  // componentDidMount() {
  //   axios.get("https://ih-beer-api.herokuapp.com/beers").then(theBeers => {
  //     // console.log('beers list', theBeers)
  //     this.setState({ beers: theBeers.data })
  //   })

  //   axios.get("https://ih-beer-api.herokuapp.com/beers/random").then(randomBeer => {
  //     console.log('A random beer appeared!', randomBeer)
  //     this.setState({ randomBeers: randomBeer.data })
  //   })



  return (
    <Fragment className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={UserDash} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/mygoals" component={MyGoals} />
        <Route exact path="/goalID" component={GoalID} />
      </Switch>

    </Fragment>
  );
}

export default App;
