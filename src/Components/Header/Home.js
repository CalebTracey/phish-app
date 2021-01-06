import React, { Component } from 'react';
import YearLinkList from '../YearLinkList';
import axios from '../../axios';
import { Navbar, Nav } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yearLinkListItem: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    try {
      axios.get("/years")
        .then((res) => {
          this.setState({ data: res.data.data, isLoading: false })
        })
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  render() {
    let yearLinkListItem = this.state.isLoading ? "Loading..." : <YearLinkList data={this.state.data} />
    return (

      <div className="container">

        < div className="hero-image">
          <div className="hero-text">
            <h1 >PhishApp</h1>
            <p>Organized Audience Recordings</p>
          </div>
        </div>
        <div >
            <Nav >
              <div className="container bg">
                <div className="btn-group">
                  {yearLinkListItem}
                </div>
              </div>
            </Nav>
        </div>
      </div>
    );
  }
}

export default Home

