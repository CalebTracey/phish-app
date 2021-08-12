import SongCompare from "../Components/Song_Components/SongCompare";
import SongLinkList from "../Components/Song_Components/SongLinkList";
import axios from "../axios";
import { Navbar, Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import React, { Component } from "react";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tourLinkListItem: null,
      isLoading: true,
      totalPages: null,
      totalEntries: null,
      page: null,
    };
  }

  async componentDidMount() {
    try {
      await axios.get("/songs").then((res) => {
        this.setState({
          totalPages: res.data.total_pages + 1,
          totalEntries: res.data.total_entries,
        });
        this.getAllSongPages();
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  async getAllSongPages() {
    let pageArray = Array.from(Array(this.state.totalPages).keys());
    pageArray.shift();
    console.log(pageArray);
    do {
      try {
        await axios.all(
          pageArray.map((page) =>
            axios
              .get("/songs", {
                params: { page: page },
              })
              .then((res) => {
                console.log(res.data);
                this.setState({ data: this.state.data.concat(res.data.data) });
              })
          )
        );
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    } while (this.state.data.length < this.state.totalEntries);
    this.state.isLoading = false;
    this.sortSongs();
  }

  sortSongs() {
    this.setState({ data: SongCompare(this.state.data) });
  }

  render() {
    return this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
      <Navbar bg="light" expand="sm" className="padding-zero">
        <Nav>
          <div className="container bvg">
            <div className="btn-group-vertical">
              <SongLinkList data={this.state.data} />
            </div>
          </div>
        </Nav>
      </Navbar>
    );
  }
}

export default Songs;
