import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import React, { Component } from 'react';
import Search from "./Search";
import About from "./About";
import Home from "./Home";
import RouteNotFound from "./RouteNotFound";
import { Route, Switch, withRouter } from "react-router-dom";


class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""

    }
  }

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "/PhishApp/results",
        state: {
          searchText: this.state.searchText
        }
      });
    } else {
      alert("Please enter some search text!");
    }
  };

  render() {
    return (
      <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={this.handleRoute("/PhishApp")}>PhishApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleRoute("/PhishApp")}>Home</Nav.Link>
            <Nav.Link onClick={this.handleRoute("/PhishApp/about")}>About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={this.handleSearchSubmit} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
    </>
    );
  }

}


export default withRouter(TopNavBar);
