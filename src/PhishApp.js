import "./style.css";
import "./index.css";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About";
import ShowDetails from "./Containers/ShowDetails";
import Years from "./Containers/Years";
import Tours from "./Containers/Tours";
import Songs from "./Containers/Songs";
import Venues from "./Containers/Venues";
import Search from "./Components/Header/Search";
import YearShow from "./Containers/YearShow";
import TourShow from "./Containers/TourShow";
import SongShow from "./Containers/SongShow";
import VenueShow from "./Containers/VenueShow";
import TopNavBar from "./Components/Header/TopNavBar";
import RouteNotFound from "./Components/Header/RouteNotFound";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const PhishApp = () => {
  return (
    <div className="wrapper">
      <Router>
        {/* <audio className="audio-element">
          <source id="audio-element-source"></source>
        </audio> */}
        <TopNavBar />
        <div className="side-and-content">
          <Sidebar />
          <div className="content-pane">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/PhishApp" component={Home} />
              <Route exact path="/PhishApp/about" component={About} />
              <Route
                exact
                path="/PhishApp/search?term=:searchText"
                component={Search}
              />
              <Route exact path="/PhishApp/tours" component={Tours} />
              <Route exact path="/PhishApp/songs" component={Songs} />
              <Route exact path="/PhishApp/years" component={Years} />
              <Route exact path="/PhishApp/venues" component={Venues} />
              <Route path="/PhishApp/years/:year" component={YearShow} />
              <Route path="/PhishApp/shows/:date" component={ShowDetails} />
              <Route path="/PhishApp/tours/:tour" component={TourShow} />
              <Route path="/PhishApp/songs/:song" component={SongShow} />
              <Route path="/PhishApp/venues/:venue" component={VenueShow} />
              <Route component={RouteNotFound} />
            </Switch>
          </div>
        </div>
        <div className="footer">&copy; 2021 Caleb Tracey</div>
      </Router>
    </div>
  );
};

export default PhishApp;
