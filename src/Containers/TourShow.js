import React, { Component } from "react";
import axios from "../axios";
import ShowLinkList from "../Components/Show_Components/ShowLinkList";
import { Navbar, Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

class TourShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showLinkListItem: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    try {
      axios.get("tours/" + this.props.match.params.tour).then((res) => {
        console.log(res.data);
        this.setState({ data: res.data.data.shows, isLoading: false });
        //this.getShows()
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  render() {
    // let showLinkListItem = this.state.isLoading ? <Spinner animation="border" /> : <ShowLinkList shows={this.state.data} />
    // return (
    return this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
      <Navbar bg="light" expand="sm">
        <Nav>
          <div className="container bvg">
            <div className="btn-group-vertical">
              <ShowLinkList showsList={this.state.data} />
            </div>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default TourShow;
