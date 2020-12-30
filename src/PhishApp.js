import "./style.css";
import "./index.css";
import React, { Component } from "react";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About";
import Years from "./Containers/Years";
import YearShow from "./Containers/YearShow";
import TopNavBar from "./Components/Header/TopNavBar";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

const PhishApp = () => {


  //const {year} = useParams()
  //const id = "2003"

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
              <Route exact path="/years">
                <Years />
              </Route>
              <Route path="/years/:year" component = {YearShow}/>
                {/* <YearShow year={year} />
              </Route> */}
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

export default PhishApp;
