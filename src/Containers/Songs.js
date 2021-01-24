import SongCompare from '../Components/Song_Components/SongCompare'
import SongLinkList from '../Components/Song_Components/SongLinkList';
import axios from '../axios';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import React, { Component } from 'react';

class Songs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tourLinkListItem: null,
            isLoading: true,

        }
    }

    async componentDidMount() {
        let page = 0
        let totalPages = 0
        do {
            try {
                await axios.get("/songs", { params: { page: ++page} })
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
        this.sortSongs()
    }

    sortSongs() {
        this.setState({ data: SongCompare(this.state.data) })
    }

    render() {
        let songLinkListItem = this.state.isLoading ? <Spinner animation="border" /> : <SongLinkList data={this.state.data} />
        return (

            <Navbar bg="light" expand="sm" className="padding-zero">
                <Nav >
                    <div className="container bvg">
                        <div className="btn-group-vertical">
                            {songLinkListItem}
                        </div>
                    </div>
                </Nav>
            </Navbar>

        );
    }
}

export default Songs;