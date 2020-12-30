import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearLinkList from '../Components/YearLinkList';
import YearRouteList from './YearRouteList';
import axios from '../axios';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ShowList from '../Components/ShowList';

class YearShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //yrs: this.props.year,
            data: []
        }
    }

    componentDidMount() {
        try {
            axios.get("/years/"+this.props.match.params.year)
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
        console.log("**********" + JSON.stringify(this.props))
        return (
            //<Router>
                    <ShowList shows={this.state.data} />
                //<Switch>
                    //<YearRouteList data={this.state.data}/>
                //</Switch>
            //</Router>
        );
    }
}

YearShow.propTypes = {
    year: PropTypes.string,
};

export default YearShow
