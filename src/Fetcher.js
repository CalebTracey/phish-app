// import axios from './axios';
// import FetcherChild from './FetcherChild';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Fetcher extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: this.props.fetch,
//       data: []
//     };
//   }

//   componentDidMount() {
//     try {
//       axios.get(this.input)
//       .then((res) => {
//       console.log(res.data)
//       this.setState({ data: res.data.data })
//     })} catch (err) {
//       // Handle Error Here
//       console.error(err);
//     }
//   }

//   render() {
//     return (<FetcherChild data={this.state.data} />)
//     }

  
// }

// Fetcher.propTypes = {
//   fetch: PropTypes.string,
// };

// export default Fetcher

