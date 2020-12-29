import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Years extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearList: this.props.input,
        }
    }
    render() {
        return (this.state.yearList);
    }
}

Years.propTypes = {
    input: PropTypes.array,
};

export default Years

