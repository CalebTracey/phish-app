import React, { Component } from 'react';
import axios from '../axios';
import ShowLinkList from '../Components/Show_Components/ShowLinkList';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import { getYearShow } from "../Redux/actions/shows";
import { connect } from "react-redux";
import ErrorBoundary from "../ErrorBoundary"

class YearShow extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         showLinkListItem: null,
    //         isLoading: true,
    //     }
    // }
    state = {}

    // componentDidMount() {
    //     try {
    //         axios.get("years/" + this.props.match.params.year)
    //             .then((res) => {
    //                 console.log(res.data)
    //                 this.setState({ data: res.data.data, isLoading: false })
    //             })
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // }

    componentDidMount() {
        this.props.getYearShow(this.props.match.params.year);
        //this.props.match.params.year

    }

    render() {
        const { shows, isLoadingData } = this.props
        let showLinkListItem = isLoadingData || shows === undefined ? <Spinner animation="border" /> : <ShowLinkList data={shows} />
        return (
            <ErrorBoundary>
                <Navbar bg="light" expand="sm">
                <Nav >
                    <div className="container bvg">
                        <div className="btn-group-vertical">
                            {showLinkListItem}
                        </div>
                    </div>
                </Nav>
            </Navbar >
            </ErrorBoundary>
            

        );
    }
}

const mapStateToProps = ({ shows = {}, isLoadingData = false }) => ({
    shows,
    isLoadingData
  });
  export default connect(
    mapStateToProps,
    {
        getYearShow
    }
  )(YearShow);
