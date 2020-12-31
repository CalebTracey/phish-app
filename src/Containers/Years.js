import React, { Component } from 'react';
import YearLinkList from '../Components/YearLinkList';
import axios from '../axios';

class Years extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        try {
            axios.get("/years")
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
        console.log(this.state.data);
        return (
            <YearLinkList data={this.state.data} />
        );
    }
}

export default Years

