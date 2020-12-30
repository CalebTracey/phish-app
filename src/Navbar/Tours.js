import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TourList from './YearList';
import axios from '../axios';
import Fetcher from '../Fetcher';

class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: <Fetcher fetch={"/tours"}/>
        }
    }
        render() {
            return (<TourList data={this.state.data} />);
        }
    }

export default Tours

