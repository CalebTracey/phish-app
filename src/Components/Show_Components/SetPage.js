import React from 'react';
import SetHeader from './SetHeader'
import TrackList from './TrackList'
import PropTypes from 'prop-types';

const SetPage = (props) => {
    let { tracks, setKey } = props

    let setTracks = tracks.filter((track) => {
        return track.set === setKey;
    });

    let setLength = setTracks.reduce((a, b) =>
        a + b.duration, 0
    )

    return (
        <div>
            <SetHeader duration={setLength} setKey={setKey} />
            <TrackList tracks={setTracks} setKey={setKey} />
        </div>
    );
}

SetPage.propTypes = {
    tracks: PropTypes.array,
    setKey: PropTypes.string,
}

export default SetPage;