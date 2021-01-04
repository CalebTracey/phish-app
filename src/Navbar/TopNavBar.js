import React, { PureComponent } from "react";
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"

class TopNavBar extends PureComponent {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PhishApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavBar;
