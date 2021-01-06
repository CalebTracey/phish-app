import "./style.css";
import "./index.css";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About";
import ShowDetails from "./Containers/ShowDetails";
import Years from "./Containers/Years";
import Tours from "./Containers/Tours";
import Songs from "./Containers/Songs";
import Search from "./Containers/Search";
import YearShow from "./Containers/YearShow";
import TopNavBar from "./Components/Header/TopNavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const PhishApp = () => {
  return (
    
      <div className="wrapper">
        <Router>
        <audio className="audio-element">
          <source id="audio-element-source"></source>
        </audio>
        <TopNavBar />
        <div className="side-and-content">
          <Sidebar />
          <div className="content-pane">

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/tours" component={Tours} />
                <Route path="/songs" component={Songs} />
                <Route exact path="/years" component={Years} />              
                <Route path="/years/:year" component={YearShow} />
                <Route path="/shows/:date" component={ShowDetails} />
              </Switch>
          </div>
          </div>
        <div className="footer">&copy; 2021 Caleb Tracey</div>
        </Router>
      </div>

  );
};

export default PhishApp;
