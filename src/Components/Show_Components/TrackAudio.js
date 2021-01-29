import React, { Component, useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const TrackAudio = ({ track, duration, url }) => {
    const [playing, toggle] = useAudio(url);
    let classStatus
    playing ? classStatus = "list-group-item list-group-item-action active" : classStatus = "list-group-item list-group-item-action"

    return (
        <div>
            <button type="button" className={classStatus} onClick={toggle}>{
                <div className="track-info-name-length">
                    <div className="track-info-pos">{track.position}</div>
                    <div className="track-info-title">{track.title}</div>
                    <div className="track-info-length">
                        {duration}
                    </div>
                </div>
            }</button>
        </div>
    );
};

// class TrackAudio extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             track: this.props.track,
//             duration: this.props.duration,
//             url: this.props.url,
//             selectedTrack: null
//         }
//     }

//     isTrackSelected() {
//         if (AudioButton.toggle == true) {
//             this.state.selectedTrack = AudioButton.track
//         }
//     }

//     render() {
//         return (
//             AudioButton(this.state.track, this.state.duration, this.state.url)
//         );
//     }
// }
// TrackAudio.propTypes = {
//     track: PropTypes.object,
//     duration: PropTypes.string,
//     url: PropTypes.string,
// }


export default TrackAudio;

