import React from 'react';

const Track = (props) => {
    let { track } = props

    return (
        <div className="track-info">
            <div className="track-info-pos">{track.position}</div>
            <div className="track-info-title">{track.title}</div>
            <div className="track-info-length">{track.duration}</div>
        </div>
    );
};

export default Track;