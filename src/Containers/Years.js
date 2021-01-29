import React, { Component } from 'react';
import YearLinkList from '../Components/Year_Components/YearLinkList';
import axios from '../axios';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import YearLinkListWithInfo from '../Components/Year_Components/YearLinkListWithInfo';

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
            axios.get("/years?include_show_counts=true")
                .then((res) => {
                    this.setState({ data: res.data.data, isLoading: false })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        let yearLinkListItem = this.state.isLoading ? <Spinner animation="border"/>: <YearLinkListWithInfo data={this.state.data} />
        return (
            <Navbar bg="light" expand="sm" className = "padding-zero">
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

