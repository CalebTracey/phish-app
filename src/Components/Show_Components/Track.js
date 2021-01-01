import React from 'react';

const Track = (props) => {
    let { track } = props

    return (
        <div>
            <div>{track.position}</div>
            <div>{track.title}</div>
            <div>{track.duration}</div>
        </div>
    );
};

export default Track;