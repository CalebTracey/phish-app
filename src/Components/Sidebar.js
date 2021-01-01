import { Nav, Navbar } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Navbar bg="light" className="sidebar">
      <Nav className="mr-auto">
        <Nav.Link href="/years">Years</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
        <Nav.Link href="/tours">Tours</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
        <Nav.Link href="/songs">Songs</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
