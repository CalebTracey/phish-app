import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import {Link} from "react-router-dom";

const TopNavBar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">PhishApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }


export default TopNavBar;
