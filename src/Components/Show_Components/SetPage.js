import React from 'react';
import SetHeader from './SetHeader'
import TrackList from './TrackList'
import PropTypes from 'prop-types';

const SetPage = (props) => {
    let { tracks, setKey } = props
    const hr = 3600000
    const min = 60000
    const sec = 1000

    let setTracks = tracks.filter((track) => {
        return track.set === setKey;
    });

    let setLength = setTracks.reduce((a, b) =>
        a + b.duration, 0
    )

    function convertLength() {
        var indexHr = 0, indexMin = 0, indexSec = 0

        if (setLength > hr) {
            while (setLength > hr) {
                setLength = setLength - hr
                indexHr++
            } while (setLength > min) {
                setLength = setLength - min
                indexMin++
            } if (indexMin < 10) {
                indexMin = "0" + indexMin
            } while (setLength > sec) {
                setLength = setLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexHr + ":" + indexMin + ":" + indexSec)
        } else if (setLength > min && indexHr === 0) {
            while (setLength > min) {
                setLength = setLength - min
                indexMin++
            } while (setLength > sec) {
                setLength = setLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexMin + ":" + indexSec)
        } else if (setLength > min && indexHr !== 0) {
            while (setLength > min) {
                setLength = setLength - min
                indexMin++
            } if (indexMin < 10) {
                indexMin = "0" + indexMin
            } while (setLength > sec) {
                setLength = setLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            } return (indexMin + ":" + indexSec)
        } else if (setLength > sec) {
            while (setLength > sec) {
                setLength = setLength - sec
                indexSec++
            } if (indexSec < 10) {
                indexSec = "0" + indexSec
            }return indexSec = "0" + indexSec;
        }
    }

        return (
            <div>
                <SetHeader duration={convertLength(setLength)} setKey={setKey} />
                <div className="list-group">
                <TrackList tracks={setTracks} setKey={setKey} />
                </div>
                
            </div>
        );
    }

    SetPage.propTypes = {
        tracks: PropTypes.array,
        setKey: PropTypes.string,
    }

    export default SetPage;