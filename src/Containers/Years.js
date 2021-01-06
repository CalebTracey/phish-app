import React, { Component } from 'react';
import YearLinkList from '../Components/YearLinkList';
import axios from '../axios';
import { Navbar, Nav } from "react-bootstrap"


class Years extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            yearLinkListItem: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        try {
            axios.get("/years")
                .then((res) => {
                    this.setState({ data: res.data.data, isLoading: false })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        let yearLinkListItem = this.state.isLoading ? "Loading..." : <YearLinkList data={this.state.data} />
        return (
            <Navbar bg="light" expand="sm">
                <Nav >
                    <div className="container bvg">
                        <div className="btn-group-vertical">
                            {yearLinkListItem}
                        </div>
                    </div>
                </Nav>
            </Navbar>

        );
    }
}

export default Years

