import React, { Component } from 'react';
import axios from '../axios';
import ShowLinkList from '../Components/ShowLinkList';
import { Navbar, Nav } from "react-bootstrap"


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
        //console.log("**********" + JSON.stringify(this.props))
        let showLinkListItem = this.state.isLoading ? "Loading..." : <ShowLinkList shows={this.state.data} />
        return (
            <Navbar bg="light" expand="sm">
                <Nav >
                    <div class="container bvg">
                        
                            <div class="btn-group-vertical">
                                {showLinkListItem}
                            </div>
                    </div>
                </Nav>
            </Navbar >
        );
    }
}

export default YearShow
