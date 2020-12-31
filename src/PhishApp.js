import "./style.css";
import "./index.css";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About";
import ShowDetails from './Containers/ShowDetails';
import Years from "./Containers/Years";
import YearShow from "./Containers/YearShow";
import TopNavBar from "./Components/Header/TopNavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PhishApp = () => {

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
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/years" component={Years} />
              <Route path="/years/:year" component={YearShow} />
              <Route path="/shows/:date" component={ShowDetails} />
            </Switch>
          </div>
        </div>
        <div className="footer">&copy; 2021 Caleb Tracey</div>
      </div>
    </Router>
  );
}

export default PhishApp;
