import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios';
import ShowLinkList from '../Components/ShowLinkList';

class YearShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        try {
            axios.get("years/" + this.props.match.params.year)
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
            <ShowLinkList shows={this.state.data} />

        );
    }
}

// YearShow.propTypes = {
//     year: PropTypes.string,
// };

export default YearShow
