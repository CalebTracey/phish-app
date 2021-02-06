import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
import allActions from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <Navbar bg="light" className="sidebar">
      <Nav className="mr-auto">
        <Link to="/PhishApp/years" className="nav-link" onClick={() =>  dispatch(allActions.yearsAction.getYears())}>Years</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/PhishApp/tours" className="nav-link">Tours</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/PhishApp/venues" className="nav-link">Venues</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/PhishApp/songs" className="nav-link">Songs</Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
