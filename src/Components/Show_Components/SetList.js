import React from 'react';
import SetPage from './SetPage'

const SetList = (props) => {
    let { show: { tracks, duration } } = props

    //["1","2","E"]
    console.log("*********TRACKS" + JSON.stringify(tracks))
    let sets = tracks.map((track) => {
        return (track.set)
    })

    let setKeys = [...new Set(sets)];

    //console.log("*********SETS" + JSON.stringify(one))

    const setNodes = setKeys.map((key) => {
        return (
            <div><SetPage tracks={tracks} duration={duration} setKey={key} /></div>
        )
    })

    return (
        <div>
            <h2>Set List</h2>
            {setNodes}
        </div>
    );
}

export default SetList;