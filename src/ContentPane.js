import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from './Header/Home';
import About from './Header/About';
import Dashboard from './Dashboard/Dashboard';
import Search from './Navbar/Search';
import Songs from './Navbar/Songs';
import Tours from './Navbar/Tours';
import Years from './Navbar/Years';
import axios from './axios';

class ContentPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: this.props.choiceString,
            contentChoice: null,
            display: null,
        }
    }

    getData() {
        // Make HTTP reques with Axios
        console.log("API Call")
        axios.get(this.state.contentChoice)
            .then((res) => {
                // Set state with result
                switch (this.state.contentChoice) {
                    case "/search":
                        return this.setState({display: <Search input={res.data.data}/> });
                    case "/years":
                        return this.setState({display: <Years input={res.data.data}/>});
                    case "/tours":
                        return this.setState({display: <Tours input={res.data.data}/>});
                    case "/songs":
                        return this.setState({display: <Songs input={res.data.data}/>});
                }
            });
    }
    
    goToContent() {
        switch (this.state.choice) {
            case "search":
                return this.setState({contentChoice: "/search"});
            case "years":
                return this.setState({contentChoice: "/years"});
            case "tours":
                return this.setState({contentChoice: "/tours"});
            case "songs":
                return this.setState({contentChoice: "/songs"});
        }
        this.getData()
    }

    render() {
        this.goToContent()
        return (
                <div>
                    {this.state.display}
                </div>
        );
    }
}

ContentPane.propTypes = {
    choiceString: PropTypes.string,
};

export default ContentPane;