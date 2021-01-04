import React, { Component } from 'react';
import YearLinkList from '../YearLinkList';
import axios from '../../axios';
import { Navbar, Nav } from "react-bootstrap"

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
          console.log(res.data)
          this.setState({ data: res.data.data, isLoading: false })
        })
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  render() {
    console.log(this.state.data);
    let yearLinkListItem = this.state.isLoading ? "Loading..." : <YearLinkList data={this.state.data} />
    return (

      <div class="container">

        < div class="hero-image">
          <div class="hero-text">
            <h1 >PhishApp</h1>
            <p>Organized Audience Recordings</p>
          </div>
        </div>
        <div >
          <Navbar >
            <div className="container bg">
              <Nav >
                  <div class="btn-group">
                    {yearLinkListItem}
                </div>
              </Nav>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Home

