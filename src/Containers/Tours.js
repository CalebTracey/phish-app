import TourLinkList from '../Components/Tour_Components/TourLinkList';
import TourCompare from '../Components/Tour_Components/TourCompare'
import axios from '../axios';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import React, { Component } from 'react';

class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tourLinkListItem: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        try {
            axios.get("/tours")
                .then((res) => {
                    this.setState({ data: res.data.data, isLoading: false })
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    async componentDidMount() {
        let page = 0
        let totalPages = 0
        do {
            try {
                await axios.get("/tours", { params: { page: ++page } })
                    .then((res) => {
                        console.log(res.data)
                        totalPages = res.data.total_pages
                        this.state.data = this.state.data.concat(res.data.data)
                        if (page != 1 && page === totalPages) {
                            this.setState({ isLoading: false })
                        }
                    })
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        } while (page < totalPages)
        this.sortTours()
    }

    sortTours() {
        this.setState({ data: TourCompare(this.state.data) })
    }

    render() {
        let tourLinkListItem = this.state.isLoading ? <Spinner animation="border" /> : <TourLinkList data={this.state.data} />
        return (
            <Navbar bg="light" expand="sm" className="padding-zero">
                <Nav >
                    <div className="container bvg">
                        <div className="btn-group-vertical">
                            {tourLinkListItem}
                        </div>
                    </div>
                </Nav>
            </Navbar>

        );
    }
}

export default Tours;