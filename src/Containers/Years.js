import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import YearLinkListInfo from "../Components/Year_Components/YearLinkListInfo";
import ErrorBoundary from "../ErrorBoundary";
import allActions from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Years = () => {
  const yearList = useSelector((state) => state.years.yearList);
  const isLoadingData = useSelector((state) => state.years.isLoadingData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (yearList === undefined) {
      dispatch(allActions.yearsAction.getYears());
    }
  }, [dispatch, yearList]);

  return isLoadingData ? (
    <Spinner animation="border" />
  ) : (
    <ErrorBoundary>
      <Navbar bg="light" expand="sm" className="padding-zero">
        <Nav>
          <div className="container bvg">
            <div className="btn-group-vertical">
              {console.log(yearList)}
              <YearLinkListInfo yearList={yearList} />
            </div>
          </div>
        </Nav>
      </Navbar>
    </ErrorBoundary>
  );
};

export default Years;

// class Years extends Component {
//     //constructor(props) {
//     //super(props);
//     //     this.state = {
//     //         data: [],
//     //         yearLinkListItem: null,
//     //         isLoading: true,
//     //     }
//     // }

//     state = {}

//     componentDidMount() {
//         // try {
//         //     axios.get("/years?include_show_counts=true")
//         //         .then((res) => {
//         //             this.setState({ data: res.data.data, isLoading: false })
//         //         })
//         // } catch (err) {
//         //     // Handle Error Here
//         //     console.error(err);
//         // }
//         this.props.getYears();
//     }

//     // shouldComponentUpdate(nextProps, nextState) {
//     //         nextProps = this.props.years
//     //         nextState = this.state
//     //         return true
//     //     }

//     render() {
//         const { years, isLoadingData } = this.props;
//         let yearLinkListItem = isLoadingData || years === undefined ? <Spinner animation="border" /> : <YearLinkListInfo data={years} />
//         return (
//             <ErrorBoundary>
//                 <Navbar bg="light" expand="sm" className="padding-zero">
//                     <Nav >
//                         <div className="container bvg">
//                             <div className="btn-group-vertical">
//                                 {yearLinkListItem}
//                             </div>
//                         </div>
//                     </Nav>
//                 </Navbar>
//             </ErrorBoundary>
//         );
//     }
// }

// const mapStateToProps = ({ years = {}, isLoadingData = false }) => ({
//     years,
//     isLoadingData
// });
// export default connect(
//     mapStateToProps,
//     {
//         getYears
//     }
// )(Years);
