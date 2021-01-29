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
            totalPages: null,
            totalEntries: null,
            page: null,
        }
    }

    async componentDidMount() {
        try {
            await axios.get("/tours")
                .then((res) => {
                    this.setState({ totalPages: res.data.total_pages + 1, totalEntries: res.data.total_entries })
                    this.getAllTourPages()
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    async getAllTourPages() {
        let pageArray = Array.from(Array(this.state.totalPages).keys())
        pageArray.shift()
        console.log(pageArray)
        do {
            try {
                await axios.all(
                    pageArray.map(page => axios.get("/tours", {
                        params: { page: page }
                    }).then((res) => {
                        console.log(res.data)
                        this.setState({ data: this.state.data.concat(res.data.data) })
                    })
                    )
                )
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
            console.log(this.state.data.length)
            console.log(this.state.totalEntries)
        }
        while (this.state.data.length < this.state.totalEntries)
        this.state.isLoading = false
        this.sortTours()
    }

    sortTours() {
        this.setState({ data: TourCompare(this.state.data) })
    }

    render() {
        let tourLinkListItem = this.state.isLoading ? <Spinner animation="border"/>  : <TourLinkList data={this.state.data} />
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