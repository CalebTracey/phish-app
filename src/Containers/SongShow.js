import React, { Component } from 'react';
import axios from '../axios';
import SongShowLinkList from '../Components/Song_Components/SongShowLinkList';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'

class SongShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showLinkListItem: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        try {
            axios.get("songs/" + this.props.match.params.id)
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
        let showLinkListItem = this.state.isLoading ? <Spinner animation="border" />  : <SongShowLinkList shows={this.state.data} />
        return (
                <Navbar bg="light" expand="sm"> 
                    <Nav >
                        <div className="container bvg">
                            <div className="btn-group-vertical">
                                {showLinkListItem}
                            </div>
                        </div>
                    </Nav>
                </Navbar >

        );
    }
}

export default SongShow