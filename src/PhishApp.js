
import './App.css';
import response from './data'
import React, { Component } from 'react';
import ShowList from './ShowList';
import axios from './axios';
import Home from './Dashboard/Home';
import About from './Dashboard/About';
import Dashboard from './Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class PhishApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: response.data
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard data={this.state.data} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

  // componentDidMount() {
  //   // Make HTTP reques with Axios
  //   axios.get('/years/2003')
  //       .then((res) => {
  //           // Set state with result
  //           this.setState({
  //               data: res.data
  //           });
  //       });

  // render() {
  //   return (

      // <div>
      //   <div className="App">
      //     <ShowList
      //       shows={this.state.data}
      //     />
      //   </div>
      // </div>
  //   );
  // }
}
export default PhishApp;
