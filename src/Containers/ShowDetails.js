import React, { Component } from 'react';
import axios from '../axios';
import Show from '../Components/Show_Components/Show'
import Spinner from 'react-bootstrap/Spinner'

class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: undefined,
            isLoading: true,
        }
    }

    componentDidMount() {
        try {
            axios.get("shows/" + this.props.match.params.date)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ show: res.data.data, isLoading: false })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        return (
            this.state.isLoading ? <Spinner animation="border" /> : <Show show={this.state.show} />
        )
    }
}
export default ShowDetails;