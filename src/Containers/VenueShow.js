import React, { Component } from "react";
import axios from "../axios";
import ShowLinkList from "../Components/Show_Components/ShowLinkList";
import VenueDateCompare from "../Components/Venue_Components/VenueDateCompare";
import { Navbar, Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

class VenueShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      shows: [],
      showLinkListItem: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      await axios.get("venues/" + this.props.match.params.venue).then((res) => {
        console.log(res.data);
        this.setState({ data: res.data.data.show_ids });
        this.getShows();
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  async getShows() {
    try {
      await this.state.data.map((showId) => {
        axios.get("shows/" + showId).then((res) => {
          console.log(res.data.data);
          this.state.shows.push(res.data.data);
          if (this.state.shows.length === this.state.data.length) {
            this.setState({ isLoading: false });
            this.sortVenueShowDates();
          }
        });
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  sortVenueShowDates() {
    this.setState({ data: VenueDateCompare(this.state.shows) });
  }

  render() {
    // let showLinkListItem = this.state.isLoading ? (
    //   <Spinner animation="border" />
    // ) : (
    //   <ShowLinkList showsList={this.state.shows} />
    // );
    return this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
      <Navbar bg="light" expand="sm">
        <Nav>
          <div className="container bvg">
            <div className="btn-group-vertical">
              <ShowLinkList showsList={this.state.shows} />
            </div>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default VenueShow;
