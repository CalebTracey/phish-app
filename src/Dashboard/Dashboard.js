import ShowList from '../ShowList'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //d: this.props.data,
            choice: null,
            isToggleOn: false,
            //data: [],
        }
        this.openShowList = this.openShowList.bind(this);
    }

    getShowData() {
        // Make HTTP reques with Axios
        axios.get('years/2003')
            .then((res) => {
                // Set state with result
                this.setState({
                    //data: res.data,
                    choice: <ShowList shows={res.data.data} />
                });
            });
    }

    openShowList() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        if (this.isToggleOn !== false) {
            this.getShowData()
        } else { this.setState({ choice: null }) };
    }

    render() {
        return (
            <div className="dash-bar">
                <div>
                    <button onClick={
                        () => { this.openShowList() }}> Show List
                    </button>
                </div>

                <div>
                    {this.state.choice}
                </div>
            </div>
        );
    }
}
// Dashboard.propTypes = {
//     data: PropTypes.array,
// };

export default Dashboard