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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const PhishApp = () => {
  return (
    <Router>
      <div className="wrapper">
        <audio className="audio-element">
          <source id="audio-element-source"></source>
        </audio>
        <TopNavBar />
        <div className="side-and-content">
          <Sidebar />
          <div className="content-pane">
            <Switch>
              <Route exact path="/PhishApp" component={Home} />
              <Route path="/PhishApp/about" component={About} />
              <Route path="/PhishApp/tours" component={Tours} />
              <Route path="/PhishApp/songs" component={Songs} />
              <Route path="/PhishApp/search" component={Search} />
              <Route exact path="/PhishApp/years" component={Years} />              
              <Route path="/PhishApp/years/:year" component={YearShow} />
              <Route path="/PhishApp/shows/:date" component={ShowDetails} />
            </Switch>
          </div>
          </div>
        <div className="footer">&copy; 2021 Caleb Tracey</div>
      </div>
    </Router>
  );
};

export default PhishApp;
