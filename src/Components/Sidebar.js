import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <Navbar bg="light" className="sidebar">
      <Nav className="mr-auto">
        <Link to="/PhishApp/years" className="nav-link">Years</Link>
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
