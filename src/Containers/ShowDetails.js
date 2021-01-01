import React, { Component } from 'react';
import axios from '../axios';
import Show from '../Components/Show'


class ShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: undefined,
            //showItem: null,
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
        //let showItem = this.state.show
        return (
            this.state.isLoading ? "Loading..." : <Show show={this.state.show}/>
            //<div>{showItem}</div>
        )
    }
}
export default ShowDetails;