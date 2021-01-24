
import ShowLink from '../Show_Components/ShowLink'
import ShowLinkList from '../Show_Components/ShowLinkList'
import SongLinkList from '../Song_Components/SongLinkList'
import TourLinkList from '../Tour_Components/TourLinkList'
import axios from './../../axios';
import { Navbar, Nav } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner'
import React, { Component } from 'react';

class Search extends Component {
  state = {
    isLoading: true,
    searchText: "",
    exactShow: null,
    otherShows: [],
    songs: [],
    tours: [],
    searchResults: null,
    searchOutput: []
  };

  async handleSearch(){
    let page = 0
    let totalPages = 0
    this.state.searchText = this.props.location.state.searchText
    do {
      try {
        await axios.get("/search/" + this.state.searchText, { params: { page: ++page } })
          .then((res) => {
            console.log(res.data)
            totalPages = res.total_pages
            this.setState({
              searchResults: res.data, exactShow: res.data.data.exact_show, otherShows: res.data.data.other_shows,
              songs: res.data.data.songs, tours: res.data.data.tours, isLoading: false
            })
          })
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    } while (page < totalPages)
  }

  componentDidMount() {
    this.handleSearch();
  }

  componentDidUpdate(prevProps) {
    let prevSearch = prevProps.location.state.searchText;
    let newSearch = this.props.location.state.searchText;
    if (prevSearch !== newSearch) {
      this.handleSearch();
    }
  }

  render() {
    let toRender = this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
        <>
          <h1>Your Search Results</h1>
          <ul>
            <li>Search: "{this.state.searchText}"</li>
          </ul>
          {this.state.searchResults !== null ? (
            <Navbar bg="light" expand="sm">
                {this.state.exactShow !== null ? (
                  <Nav >
                    <h4>Exact Show</h4>
                    <div className="btn-group-vertical">
                      <ShowLink show={this.state.exactShow} />
                    </div>
                    </Nav>
                ) : (
                  <></>
              )}
              {this.state.otherShows.length > 0 ? (
              <Nav >
                <h4>Other Shows on this Day</h4>
                <div className="container bvg">
                  <div className="btn-group-vertical">
                    <ShowLinkList shows={this.state.otherShows} />
                  </div>
                </div>
              </Nav>
              ) : (
                <></>
            )}
            {this.state.songs.length > 0 ? (
              <Nav >
                <h4>Matching Songs</h4>
                <div className="container bvg">
                  <div className="btn-group-vertical">
                    <SongLinkList data={this.state.songs} />
                  </div>
                </div>
              </Nav>
              ) : (
                <></>
            )}
            {this.state.tours.length > 0 ? (
              <Nav >
                <h4>Matching Tours</h4>
                <div className="container bvg">
                  <div className="btn-group-vertical">
                    <TourLinkList data={this.state.tours} />
                  </div>
                </div>
              </Nav>
              ) : (
                <></>
            )}
            </Navbar >
          ) : (
              <p>NO RESULTS FOUND</p>
            )}
        </>
      );

    return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
  }
}
export default Search