import React, { Component } from "react";

class Track extends Component {
    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
    }

    convertLength() {
        let { track } = this.props;
        let trackLength = track.duration;
        const hr = 3600000;
        const min = 60000;
        const sec = 1000;
        var indexHr = 0,
            indexMin = 0,
            indexSec = 0;

        if (trackLength > hr) {
            while (trackLength > hr) {
                trackLength = trackLength - hr;
                indexHr++;
            }
            while (trackLength > min) {
                trackLength = trackLength - min;
                indexMin++;
            }
            if (indexMin < 10) {
                indexMin = "0" + indexMin;
            }
            while (trackLength > sec) {
                trackLength = trackLength - sec;
                indexSec++;
            }
            if (indexSec < 10) {
                indexSec = "0" + indexSec;
            }
            return indexHr + ":" + indexMin + ":" + indexSec;
        } else if (trackLength > min && indexHr === 0) {
            while (trackLength > min) {
                trackLength = trackLength - min;
                indexMin++;
            }
            while (trackLength > sec) {
                trackLength = trackLength - sec;
                indexSec++;
            }
            if (indexSec < 10) {
                indexSec = "0" + indexSec;
            }
            return indexMin + ":" + indexSec;
        } else if (trackLength > min && indexHr !== 0) {
            while (trackLength > min) {
                trackLength = trackLength - min;
                indexMin++;
            }
            if (indexMin < 10) {
                indexMin = "0" + indexMin;
            }
            while (trackLength > sec) {
                trackLength = trackLength - sec;
                indexSec++;
            }
            if (indexSec < 10) {
                indexSec = "0" + indexSec;
            }
            return indexMin + ":" + indexSec;
        } else {
            while (trackLength > sec) {
                trackLength = trackLength - sec;
                indexSec++;
            }
            if (indexSec < 10) {
                indexSec = "0" + indexSec;
            }
            return indexSec + "seconds";
        }
    }
  // hacky node manipulation. AudioPlayer should be a component.
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (audioEl !== undefined) {
      const source = document.getElementById("audio-element-source");
      source.src = this.props.track.mp3;
      audioEl.load();
      audioEl.play();
    }


  render() {
    let { track } = this.props;
    return (
      <div className="list-group-item">
        <div className="track-info-name-length">
          <div className="track-info-pos">{track.position}</div>
          <div className="track-info-title">{track.title}</div>
          <div className="track-info-length glyphicon glyphicon-play-circle">
            <button className="btn">
              <i className="fa fa-play" onClick={this.playAudio}></i>
            </button>
          </div>
          <div className="track-info-length">
            {this.convertLength(track.duration)}
          </div>
        </div>
      </div>
    );
  }

}

export default Track;
