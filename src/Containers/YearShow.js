import React, { Component } from 'react';
import axios from '../axios';
import ShowLinkList from '../Components/Show_Components/ShowLinkList';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'

class YearShow extends Component {
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
            axios.get("years/" + this.props.match.params.year)
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
        let showLinkListItem = this.state.isLoading ? <Spinner animation="border" />  : <ShowLinkList shows={this.state.data.data} />
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

export default YearShow
