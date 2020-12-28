
import './App.css';
import response from './data'
import React, { Component } from 'react';
import ShowList from './ShowList';

class PhishApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: response.data
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <ShowList
            shows={this.state.data}
          />
        </div>
      </div>
    );
  }
}
export default PhishApp;
