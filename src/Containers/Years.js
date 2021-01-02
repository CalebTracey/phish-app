import React, { Component } from 'react';
import YearLinkList from '../Components/YearLinkList';
import axios from '../axios';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"


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
                    console.log(res.data)
                    this.setState({ data: res.data.data, isLoading: false })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        console.log(this.state.data);
        let yearLinkListItem = this.state.isLoading ? "Loading..." : <YearLinkList data={this.state.data} />
        return (
            <Navbar bg="light" expand="sm">
                <Nav >
                    <div class="container">
                        <div class="btn-group-vertical">
                        {yearLinkListItem}
                        </div>
                        
                    </div>
                </Nav>
            </Navbar>

        );
    }
}

export default Years

