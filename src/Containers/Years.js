import React, { Component } from 'react';
import YearLinkList from '../Components/Year_Components/YearLinkList';
import axios from '../axios';
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import YearLinkListInfo from '../Components/Year_Components/YearLinkListInfo';
import { getYears } from "../Redux/actions/years";
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

    // shouldComponentUpdate(nextProps, nextState) {
    //         nextProps = this.props.years
    //         nextState = this.state
    //         return true
    //     }
    

    render() {
        const { years, isLoadingData } = this.props;
        let yearLinkListItem = isLoadingData || years === undefined ? <Spinner animation="border" /> : <YearLinkListInfo data={years} />
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

const mapStateToProps = ({ years = {}, isLoadingData = false }) => ({
    years,
    isLoadingData
});
export default connect(
    mapStateToProps,
    {
        getYears
    }
)(Years);
