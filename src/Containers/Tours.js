// import React from 'react';

// const Tours = () => {
//     return (
//         <div className="tours-center">
//             <h1 className="tours-text">
//                 Coming soon...
//             </h1>
//         </div>
//     );
// };

// export default Tours;
import TourLinkList from '../Components/TourLinkList';
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

    render() {
        let tourLinkListItem = this.state.isLoading ? <Spinner animation="border" /> : <TourLinkList data={this.state.data} />
        return (

            <Navbar bg="light" expand="sm" className = "padding-zero">
                <div className="tour-header">
                    Tour data is incomplete
                </div>
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