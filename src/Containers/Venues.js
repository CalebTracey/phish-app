import React, { Component } from 'react';
import VenueLinkList from '../Components/Venue_Components/VenueLinkList';
import VenueCompare from '../Components/Venue_Components/VenueCompare'
import axios from '../axios';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'

class Venues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            yearLinkListItem: null,
            isLoading: true,
        }
    }

    async componentDidMount() {
        let page = 0
        let totalPages = 0
        do {
            try {
                await axios.get("/venues", { params: { page: ++page } })
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
        this.setState({ data: VenueCompare(this.state.data) })
    }

    render() {
        let yearLinkListItem = this.state.isLoading ? <Spinner animation="border" /> : <VenueLinkList data={this.state.data} />
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

export default Venues