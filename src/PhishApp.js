
import './App.css';
import response from './data'
import React, { Component } from 'react';
import ShowList from './ShowList';
import axios from './axios';

class PhishApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }
  
  // tokenPayload() {
  //   const config = {
  //     headers: { Authorization: `Bearer 856913ac92a15776365c3c519185fb5a4b0d041f248cbcb6f177c31906fe978345f1d6be08267531b818e52ddd9149f2` }
  //   };
  //   const bodyParameters = {
  //     key: "years/2003"
  //   };
  //   axios.post(
  //     'https://phish.in/api/v1',
  //     bodyParameters,
  //     config
  //   ).then(console.log).catch(console.log);
  // }

  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get('/years/2003')
        .then((res) => {
            // Set state with result
            this.setState({
                data: res.data
            });
        });
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
