import React from 'react';
import SetHeader from './SetHeader'
import TrackList from './TrackList'
import PropTypes from 'prop-types';

const SetPage = (props) => {
    let {tracks, duration, setKey}  = props

    return (
        <div>
            <div><SetHeader duration={duration} setKey={setKey}/></div>
            <div><TrackList tracks={tracks} setKey={setKey}/></div>
        </div>
    );
}

// SetPage.propTypes = {
//     tracks: PropTypes.array,
//     duration: PropTypes.number,

// }

export default SetPage;