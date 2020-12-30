import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearList from './YearList';
import axios from '../axios';
import Fetcher from '../Fetcher';

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
        })} catch (err) {
          // Handle Error Here
          console.error(err);
        }
      }

    render() {
        return (<YearList data={this.state.data} />);
    }
}

export default Years

