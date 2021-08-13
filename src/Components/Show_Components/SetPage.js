import React from "react";
import SetHeader from "./SetHeader";
import TrackList from "./TrackList";
import PropTypes from "prop-types";

const SetPage = ({ tracks, setKey }) => {
  const setTracks = tracks.filter((track) => {
    return track.set === setKey;
  });

  const setLength = setTracks.reduce((a, b) => a + b.duration, 0);

  const time = new Date(null);
  time.setMilliseconds(setLength);
  const setTimeString = time.toISOString().substr(11, 8);

  return (
    <>
      <SetHeader duration={setTimeString} setKey={setKey} />
      <div className="list-group">
        <TrackList tracks={setTracks} setKey={setKey} />
      </div>
    </>
  );
};

SetPage.propTypes = {
  tracks: PropTypes.array,
  setKey: PropTypes.string,
};

export default SetPage;
