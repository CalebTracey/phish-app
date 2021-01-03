import "./style.css";
import "./index.css";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About";
import ShowDetails from "./Containers/ShowDetails";
import Years from "./Containers/Years";
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
          {/* <div class="container"> */}
          <div className="content-pane">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/years" component={Years} />
              
              <Route path="/years/:year" component={YearShow} />
              
              <Route path="/shows/:date" component={ShowDetails} />
            </Switch>
          </div>
          </div>
          
        {/* </div> */}
        <div className="footer">&copy; 2021 Caleb Tracey</div>
      </div>
    </Router>
  );
};

export default PhishApp;
