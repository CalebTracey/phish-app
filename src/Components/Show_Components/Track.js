import React from "react";
import TrackAudio from "./TrackAudio";

const Track = ({ track }) => {
  const time = new Date(null);
  time.setMilliseconds(track.duration);
  const setTimeString = time.toISOString().substr(14, 5);

  return <TrackAudio track={track} duration={setTimeString} url={track.mp3} />;
};

export default Track;
