import React, { Component } from "react";
import axios from "../axios";
import SongShowLinkList from "../Components/Song_Components/SongShowLinkList";
import { Navbar, Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

class SongShow extends Component {
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
      axios.get("songs/" + this.props.match.params.song).then((res) => {
        this.setState({ data: res.data.data, isLoading: false });
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
      <Navbar bg="light" expand="sm">
        <Nav>
          <div className="container bvg">
            <div className="btn-group-vertical">
              <SongShowLinkList shows={this.state.data} />
            </div>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default SongShow;
