// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './style.css';


// class Show extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             s: this.props.show,
//             k: this.props.key,
//             notesClass: "taper-notesOFF",
//         }
//         this.showNotes = this.showNotes.bind(this);
//     }

//     showNotes() {
//         if (this.state.notesClass === "taper-notesOFF") {
//             this.setState({ notesClass: "taper-notesON" });
//         } else {
//             this.setState({ notesClass: "taper-notesOFF" });
//         }
//     }

//     render() {
//         return (
//             <div className="show"
//                 onClick={
//                     () => {
//                         if (this.state.notesClass === "taper-notesOFF") {
//                             this.setState({ notesClass: "taper-notesON" });
//                         } else {
//                             this.setState({ notesClass: "taper-notesOFF" });
//                         }
//                     }
//                 }>
//                 <div className="show-row-1">
//                     <div className="show-field"> {this.state.s.date} </div>
//                     <div className="show-field"> {this.state.s.venue_name} </div>
//                 </div>
//                 <div className="show-row-2">
//                     <div className={this.state.notesClass}> {this.state.s.taper_notes} </div>
//                 </div>
//             </div>
//         );
//     }
// }

// Show.propTypes = {
//     show: PropTypes.object,
//     key: PropTypes.string,
// };

// export default Show