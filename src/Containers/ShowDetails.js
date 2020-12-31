import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios';
import Show from '../Components/Show'


class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null,
            showIsDone: null
        }
    }

    componentDidMount() {
        try {
            axios.get("shows/" + this.props.match.params.date)
                .then((res) => {
                    console.log(res.show)
                    this.setState({ show: res.data })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        // if (this.state.show !== -1) {
        //     this.setState({showIsDone: "Loading..."})
        // } else { this.setState({showIsDone: <Show show={this.state.show} />}) }
        //     return(
        //         this.state.showIsDone
        //     )
        // }
        return (<Show show={this.state.show} />)
    }


}

export default ShowDetails;