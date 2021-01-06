import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <Navbar bg="light" className="sidebar">
      <Nav className="mr-auto">
        <Link to="/years" className="nav-link">Years</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/tours" className="nav-link">Tours</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link to="/songs" className="nav-link">Songs</Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
