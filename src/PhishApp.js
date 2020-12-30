import "./style.css";
import "./index.css";
import React, { Component } from "react";
import Home from "./Header/Home";
import About from "./Header/About";
import Years from "./Navbar/Years";
import TopNavBar from "./Navbar/TopNavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PhishApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <TopNavBar />
          <div className="side-and-content">
            <div className="side-bar">
              <div className="nav-item">
                <Link to="/search">Search</Link>
              </div>
              <div className="nav-item">
                <Link to="/years">Years</Link>
              </div>
              <div className="nav-item">
                <Link to="/tours">Tours</Link>
              </div>
              <div className="nav-item">
                <Link to="/songs">Songs</Link>
              </div>
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
