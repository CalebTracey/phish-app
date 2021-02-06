import TourLinkList from '../Components/Tour_Components/TourLinkList';
import TourCompare from '../Components/Tour_Components/TourCompare'
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import React, { useEffect } from 'react';
import allActions from "../Redux/actions";
import ErrorBoundary from "../ErrorBoundary"
import { useSelector, useDispatch } from "react-redux";

const Tours = () => {
    
    const tourList = useSelector(state => state.tours.tourList)
    const isLoadingData = useSelector(state => state.tours.isLoadingData)

    const dispatch = useDispatch()

    useEffect(() => {
        if (tourList === undefined) {
            dispatch(allActions.toursAction.getTours())
        }
    }, [dispatch, tourList])

    //let tourLinkListItem = isLoadingData || tours === undefined ? <Spinner animation="border" /> : <TourLinkList tours={tours} />

    return ( 
        isLoadingData ? 
        <Spinner animation="border" /> :
        <ErrorBoundary>
            <Navbar bg="light" expand="sm" className="padding-zero">
                <Nav >
                    <div className="container bvg">
                        <div className="btn-group-vertical">
                        <TourLinkList tourList={tourList} />
                        </div>
                    </div>
                </Nav>
            </Navbar>
        </ErrorBoundary>
    );
}

export default Tours;



// const mapStateToProps = ({ tours = {}, isLoadingData = false }) => ({
//     tours,
//     isLoadingData
//   });
//   export default connect(
//     mapStateToProps,
//     {
//         getTours
//     }
//   )(Tours);


/**
 * OLD CODE
 *
 */
      // async componentDidMount() {
    //     try {
    //         await axios.get("/tours")
    //             .then((res) => {
    //                 this.setState({ totalPages: res.data.total_pages + 1, totalEntries: res.data.total_entries })
    //                 this.getAllTourPages()
    //             })
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // }

    // async getAllTourPages() {
    //     let pageArray = Array.from(Array(this.state.totalPages).keys())
    //     pageArray.shift()
    //     console.log(pageArray)
    //     do {
    //         try {
    //             await axios.all(
    //                 pageArray.map(page => axios.get("/tours", {
    //                     params: { page: page }
    //                 }).then((res) => {
    //                     console.log(res.data)
    //                     this.setState({ data: this.state.data.concat(res.data.data) })
    //                 })
    //                 )
    //             )
    //         } catch (err) {
    //             // Handle Error Here
    //             console.error(err);
    //         }
    //         console.log(this.state.data.length)
    //         console.log(this.state.totalEntries)
    //     }
    //     while (this.state.data.length < this.state.totalEntries)
    //     this.state.isLoading = false
    //     this.sortTours()
    // }

    // sortTours() {
    //     this.setState({ data: TourCompare(this.state.data) })
    // }