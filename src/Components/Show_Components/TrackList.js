import React from 'react';
import Track from './Track'
import PropTypes from 'prop-types';

const TrackList = (props) => {
    let { tracks, setKey } = props;

    let setTracks = tracks.filter((track) => {
        return track.set === setKey;
    });

    const trackNode = setTracks.map((track) => {
        return <Track track={track} />;
    });

    return (
        <div class="list-group">
            {trackNode}
        </div>
    );
}

TrackList.propTypes = {
    tracks: PropTypes.array,
    setKey: PropTypes.string,
}

export default TrackList;