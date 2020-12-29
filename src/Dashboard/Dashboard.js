import ShowList from '../ShowList'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: this.props.data,
            choice: "Pick an option"
        }
    }

    openShowList() {
        this.setState({
            choice: <div className="App">
                <ShowList
                    shows={this.state.d}
                />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <button onClick={() => {
                    this.openShowList()
                }}>
                    Show List
                  </button>
                <div>
                    {this.state.choice}
                </div>
            </div>
        );
    }

}
Dashboard.propTypes = {
    data: PropTypes.array,
};

export default Dashboard