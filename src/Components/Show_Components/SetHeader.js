import React from 'react';

const SetHeader = (props) => {
    let { duration, setKey } = props

    // let d = 0
    // let setDuration = tracks.map((track) => {
    //     return track.set === "1"
    // })

    return (
        <div>
            <div>Set {setKey}</div>
            <div>Length: {duration}</div>
        </div>
    );
};

export default SetHeader;