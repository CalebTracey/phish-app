import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearLinkList from '../Components/YearLinkList';
import YearRouteList from './YearRouteList';
import axios from '../axios';
import { BrowserRouter as Router, Switch } from "react-router-dom";

class Years extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //data: <Fetcher fetch={"/years"}/>,
            data: []
        }
    }

    componentDidMount() {
        try {
            axios.get("/years")
                .then((res) => {
                    console.log(res.data)
                    this.setState({ data: res.data.data })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        return (
            //<Router>
                    <YearLinkList data={this.state.data} />
                //<Switch>
                    //<YearRouteList data={this.state.data}/>
                //</Switch>
            //</Router>
        );
    }
}

export default Years

