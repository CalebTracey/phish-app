import React, { Component } from 'react';
import axios from '../axios';
import Show from '../Components/Show'


class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: undefined,
            isFetching: false,
            showItem: null,
        }
    }

    componentDidMount() {
        try {
            axios.get("shows/" + this.props.match.params.date)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ show: res.data })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        this.state.showItem = this.state.show === undefined ? "Loading..." :
        this.state = {
            showItem: <Show show={this.state.show} />
        }

        return (
            <div>
                {this.state.showItem}
            </div>
        )
    }
}
export default ShowDetails;