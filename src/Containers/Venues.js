import React, { Component } from "react";
import VenueLinkList from "../Components/Venue_Components/VenueLinkList";
import VenueCompare from "../Components/Venue_Components/VenueCompare";
import axios from "../axios";
import { Navbar, Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yearLinkListItem: null,
      isLoading: true,
      totalPages: null,
      totalEntries: null,
      page: null,
    };
  }

  async componentDidMount() {
    try {
      await axios.get("/venues").then((res) => {
        this.setState({
          totalPages: res.data.total_pages + 1,
          totalEntries: res.data.total_entries,
        });
        this.getAllVenuePages();
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getAllVenuePages() {
    let pageArray = Array.from(Array(this.state.totalPages).keys());
    pageArray.shift();
    do {
      try {
        await axios.all(
          pageArray.map((page) =>
            axios
              .get("/venues", {
                params: { page: page },
              })
              .then((res) => {
                console.log(res.data);
                this.setState({ data: this.state.data.concat(res.data.data) });
              })
          )
        );
      } catch (err) {
        console.error(err);
      }
    } while (this.state.data.length < this.state.totalEntries);
    this.state.isLoading = false;
    this.sortTours();
  }

  sortTours() {
    this.setState({ data: VenueCompare(this.state.data) });
  }

  render() {
    return this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
      <Navbar bg="light" expand="sm" className="padding-zero">
        <Nav>
          <div className="container bvg">
            <div className="btn-group-vertical">
              <VenueLinkList data={this.state.data} />
            </div>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default Venues;
