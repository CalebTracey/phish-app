import React, { Component } from 'react';
import YearLinkList from '../Components/Year_Components/YearLinkList';
import axios from '../axios';
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import YearLinkListWithInfo from '../Components/Year_Components/YearLinkListInfo';
import { getYears } from "../actions";
import ErrorBoundary from "../ErrorBoundary"


class Years extends Component {
    //constructor(props) {
        //super(props);
    //     this.state = {
    //         data: [],
    //         yearLinkListItem: null,
    //         isLoading: true,
    //     }
    // }

    state = {}

    componentDidMount() {
        // try {
        //     axios.get("/years?include_show_counts=true")
        //         .then((res) => {
        //             this.setState({ data: res.data.data, isLoading: false })
        //         })
        // } catch (err) {
        //     // Handle Error Here
        //     console.error(err);
        // }
        this.props.getYears();
    }

    render() {
        const { data } = this.props.data;
        let yearLinkListItem = this.state.isLoading ? <Spinner animation="border" /> : <YearLinkListWithInfo data={data} />
        return (
            <ErrorBoundary>
                <Navbar bg="light" expand="sm" className="padding-zero">
                <Nav >
                    <div className="container bvg">
                        <div className="btn-group-vertical">
                            {yearLinkListItem}
                        </div>
                    </div>
                </Nav>
            </Navbar>
            </ErrorBoundary>
            

        );
    }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
    data,
    isLoadingData
  });
  export default connect(
    mapStateToProps,
    {
        getYears
    }
  )(Years);
