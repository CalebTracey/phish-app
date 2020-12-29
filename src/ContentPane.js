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

class ContentPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: this.props.choiceString,
            contentChoice: null,
        }
    }

    render() {
        return (
            <Router>
                <div >

                </div>
            </Router>
        );
    }
}

ContentPane.propTypes = {
    choiceString: PropTypes.string,
};

export default ContentPane;