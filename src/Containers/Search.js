import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.search,
        }
    }
    
    render() {
        return (
            <div>
                {this.state.input}
            </div>
        );
    }
}

Search.propTypes = {
    search: PropTypes.string,
}

export default Search;