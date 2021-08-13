import React, { Component } from "react";
import YearLinkList from "../Year_Components/YearLinkList";
import axios from "../../axios";
import { Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yearLinkListItem: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    try {
      axios.get("/years").then((res) => {
        this.setState({ data: res.data.data, isLoading: false });
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  render() {
    return this.state.isLoading ? (
      <Spinner animation="border" />
    ) : (
      <div className="container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>PhishApp</h1>
            <p>Organized Audience Recordings</p>
          </div>
        </div>
        <div>
          <Nav>
            <div className="container bg">
              <div className="btn-group">
                <YearLinkList data={this.state.data} />
              </div>
            </div>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Home;
