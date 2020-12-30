import "./style.css";
import "./index.css";
import response from "./data";
import React, { Component } from "react";
import ContentPane from "./ContentPane";
import ShowList from "./ShowList";
import axios from "./axios";
import Home from './Header/Home';
import About from './Header/About';
import Years from './Navbar/Years';
import Tours from './Navbar/Tours';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PhishApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  // componentDidMount() {
  //   // Make HTTP reques with Axios
  //   axios.get('years/2003')
  //       .then((res) => {
  //           // Set state with result
  //           this.setState({
  //               data: res.data
  //           });
  //       });
  //     }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="nav-bar">
            <div className="nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="side-and-content">
            <div className="side-bar">
              <div className="nav-item">
                <Link to="/search">Search</Link></div>
              <div className="nav-item">
                <Link to="/years">Years</Link></div>
              <div className="nav-item">
                <Link to="/tours">Tours</Link></div>
              <div className="nav-item">
                <Link to="/songs">Songs</Link></div>
            </div>
            <div className="content-pane">
              <Switch>
                <Route exact path="/">
                  <Home />
                  {/* <ContentPane choiceString={"home"} /> */}
                </Route>
                <Route path="/about">
                  <About />
                  {/* <ContentPane choiceString={"about"} /> */}
                </Route>
                {/* <Route path="/search">
                  <ContentPane choiceString={"search"} />
                </Route> */}
                <Route path="/years">
                  <Years />
                  {/* <ContentPane choiceString={"years"} /> */}
                </Route>
                {/* <Route path="/tours">
                  <Tours />
                </Route> */}
                {/* <Route path="/songs">
                  <ContentPane choiceString={"songs"} />
                </Route> */}
              </Switch>
            </div>
          </div>
          <div className="footer">&copy; 2021 Caleb Tracey</div>
        </div>
      </Router>
    );
  }
}

export default PhishApp;
