import React from 'react';

const Track = (props) => {
    let { track } = props
    let trackLength = track.duration
    const hr = 3600000
    const min = 60000
    const sec = 1000

    function convertLength() {
        var indexHr = 0, indexMin = 0, indexSec = 0

        if (trackLength > hr) {
            while (trackLength > hr) {
                trackLength = trackLength - hr
                indexHr++
            } while (trackLength > min) {
                trackLength = trackLength - min
                indexMin++
            } if (indexMin < 10) {
                indexMin = "0" + indexMin
            } while (trackLength > sec) {
                trackLength = trackLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexHr + ":" + indexMin + ":" + indexSec)
        } else if (trackLength > min && indexHr == 0) {
            while (trackLength > min) {
                trackLength = trackLength - min
                indexMin++
            } while (trackLength > sec) {
                trackLength = trackLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexMin + ":" + indexSec)
        } else if (trackLength > min && indexHr != 0) {
            while (trackLength > min) {
                trackLength = trackLength - min
                indexMin++
            } if (indexMin < 10) {
                indexMin = "0" + indexMin
            } while (trackLength > sec) {
                trackLength = trackLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexMin + ":" + indexSec)
        } else {
            while (trackLength > sec) {
                trackLength = trackLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexSec + "seconds")
        }
    }

    return (
        <div className="track-info">
            <div className="track-info-pos">{track.position}</div>
            <div className="track-info-name-length">
                <div className="track-info-title">{track.title}</div>
                <div className="track-info-length">{convertLength(trackLength)}</div>
            </div>
        </div>
    );
};

export default Track;